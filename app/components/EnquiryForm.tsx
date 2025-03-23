"use client";

import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, Loader2, Mail, Building2, User, Phone } from "lucide-react";

export default function EnquiryForm() {
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState({
    formData: {
      name: "",
      company: "",
      email: "",
      mobile: "",
    },
    status: { type: "none" as "success" | "error" | "none", message: "" },
    isSubmitting: false,
    touchedFields: new Set<string>(),
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isValidMobile = (mobile: string) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  const getFieldError = (field: string): string => {
    if (!formState.touchedFields.has(field)) return "";

    switch (field) {
      case "name":
        return formState.formData.name.length < 2 ? "Name is required" : "";
      case "company":
        return formState.formData.company.length < 2 ? "Company name is required" : "";
      case "email":
        return !isValidEmail(formState.formData.email) ? "Please enter a valid email" : "";
      case "mobile":
        return !isValidMobile(formState.formData.mobile)
          ? "Please enter a valid 10-digit mobile number"
          : "";
      default:
        return "";
    }
  };

  const handleBlur = (field: string) => {
    setFormState((prev) => ({
      ...prev,
      touchedFields: new Set(prev.touchedFields).add(field),
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!mounted) return;

    setFormState((prev) => ({
      ...prev,
      touchedFields: new Set(["name", "company", "email", "mobile"]),
    }));

    const errors = ["name", "company", "email", "mobile"].map(getFieldError);
    if (errors.some((error) => error !== "")) {
      setFormState((prev) => ({
        ...prev,
        status: {
          type: "error",
          message: "Please correct the errors in the form.",
        },
      }));
      return;
    }

    setFormState((prev) => ({
      ...prev,
      isSubmitting: true,
      status: { type: "none", message: "" },
    }));

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState.formData),
      });

      if (!response.ok) {
        throw new Error();
      }

      setFormState((prev) => ({
        ...prev,
        status: {
          type: "success",
          message: "Your enquiry has been submitted successfully!",
        },
        formData: { name: "", company: "", email: "", mobile: "" },
        touchedFields: new Set(),
      }));

    } catch {
      setFormState((prev) => ({
        ...prev,
        status: {
          type: "error",
          message: "There was an error submitting your enquiry. Please try again.",
        },
      }));
    } finally {
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
      }));
    }
  };

  const inputBaseClasses = `
    w-full px-4 py-3 rounded-xl border bg-white/5 backdrop-blur-sm
    transition-all duration-200 placeholder:text-gray-400 text-white
    focus:outline-none focus:ring-2 focus:bg-white/10
    pl-11
  `;

  const inputClasses = (field: string) => `
    ${inputBaseClasses}
    ${
      formState.touchedFields.has(field) && getFieldError(field)
        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
        : "border-white/10 focus:border-primary-500 focus:ring-primary-500/20 hover:border-white/20"
    }
  `;

  const formWrapperClasses = `
    w-full max-w-xl mx-auto backdrop-blur-xl bg-black/40 p-8 rounded-2xl
    border border-white/10 shadow-2xl shadow-black/20
  `;

  const buttonClasses = `
    w-full py-4 rounded-xl font-medium text-base
    transition-all duration-300
    ${
      formState.isSubmitting
        ? "bg-primary-400/80 cursor-not-allowed"
        : "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:shadow-lg hover:shadow-primary-500/25"
    }
    text-white flex items-center justify-center gap-2
  `;

  const errorMessageClasses = `
    text-sm text-red-400 flex items-center gap-1.5 pl-1 mt-2
  `;

  const getStatusClasses = (type: "success" | "error") => `
    mt-6 p-4 rounded-xl flex items-center gap-3
    ${
      type === "success"
        ? "bg-primary-500/10 text-primary-400 border border-primary-500/20"
        : "bg-red-500/10 text-red-400 border border-red-500/20"
    }
  `;

  const inputIconClasses = "w-5 h-5 text-gray-400 absolute left-4 top-3.5";

  if (!mounted) return null;

  return (
    <div className={formWrapperClasses}>
      <h2 className="text-3xl font-bold mb-2 text-white text-center">
        Send Us Your Enquiry
      </h2>
      <p className="text-gray-400 text-center mb-8">
        Fill out the form below and we&apos;ll get back to you shortly
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1 relative">
          <User className={inputIconClasses} />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formState.formData.name}
            onChange={(e) => setFormState((prev) => ({
              ...prev,
              formData: { ...prev.formData, name: e.target.value },
            }))}
            onBlur={() => handleBlur("name")}
            className={inputClasses("name")}
            disabled={formState.isSubmitting}
            required
          />
          {getFieldError("name") && (
            <p className={errorMessageClasses}>
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {getFieldError("name")}
            </p>
          )}
        </div>

        <div className="space-y-1 relative">
          <Building2 className={inputIconClasses} />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formState.formData.company}
            onChange={(e) => setFormState((prev) => ({
              ...prev,
              formData: { ...prev.formData, company: e.target.value },
            }))}
            onBlur={() => handleBlur("company")}
            className={inputClasses("company")}
            disabled={formState.isSubmitting}
            required
          />
          {getFieldError("company") && (
            <p className={errorMessageClasses}>
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {getFieldError("company")}
            </p>
          )}
        </div>

        <div className="space-y-1 relative">
          <Mail className={inputIconClasses} />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formState.formData.email}
            onChange={(e) => setFormState((prev) => ({
              ...prev,
              formData: { ...prev.formData, email: e.target.value },
            }))}
            onBlur={() => handleBlur("email")}
            className={inputClasses("email")}
            disabled={formState.isSubmitting}
            required
          />
          {getFieldError("email") && (
            <p className={errorMessageClasses}>
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {getFieldError("email")}
            </p>
          )}
        </div>

        <div className="space-y-1 relative">
          <Phone className={inputIconClasses} />
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            value={formState.formData.mobile}
            onChange={(e) => setFormState((prev) => ({
              ...prev,
              formData: { ...prev.formData, mobile: e.target.value },
            }))}
            onBlur={() => handleBlur("mobile")}
            className={inputClasses("mobile")}
            disabled={formState.isSubmitting}
            required
          />
          {getFieldError("mobile") && (
            <p className={errorMessageClasses}>
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {getFieldError("mobile")}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={formState.isSubmitting}
          className={buttonClasses}
        >
          {formState.isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Enquiry"
          )}
        </button>

        {formState.status.type !== "none" && (
          <div className={getStatusClasses(formState.status.type)}>
            {formState.status.type === "success" ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <p className="text-sm flex-1">{formState.status.message}</p>
          </div>
        )}
      </form>
    </div>
  );
}