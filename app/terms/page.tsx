import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-secondary-100">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-primary-500 mb-12">Terms of Service</h1>
        
        <div className="space-y-12 text-secondary-100">
          <p className="text-lg text-secondary-300 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Service Agreement</h2>
            <p className="text-secondary-300 leading-relaxed">
              By engaging with Security Monks&apos; services, you agree to these terms and acknowledge our
              commitment to maintaining the highest standards of cybersecurity service delivery. These terms
              govern all interactions with our platform and services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Service Scope</h2>
            <p className="text-secondary-300 mb-4">Our services include but are not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 text-secondary-300">
              <li>Cybersecurity consulting and advisory services</li>
              <li>Security assessment and penetration testing</li>
              <li>Security training and awareness programs</li>
              <li>Incident response and management</li>
              <li>Compliance and regulatory guidance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Client Responsibilities</h2>
            <p className="text-secondary-300 mb-4">As a client, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-secondary-300">
              <li>Provide accurate and complete information</li>
              <li>Maintain confidentiality of any provided credentials</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Not attempt to circumvent our security measures</li>
              <li>Promptly report any security incidents or concerns</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Limitation of Liability</h2>
            <p className="text-secondary-300 leading-relaxed">
              While we strive for excellence in cybersecurity, we cannot guarantee absolute security.
              Our services are provided &quot;as is,&quot; and we shall not be liable for any indirect,
              incidental, special, or consequential damages.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Contact Us</h2>
            <p className="text-secondary-300">
              For questions about these terms, please reach out to us at{' '}
              <a href="mailto:knock@securitymonks.in" className="text-primary-500 hover:text-primary-400 transition-colors duration-300">
                knock@securitymonks.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 