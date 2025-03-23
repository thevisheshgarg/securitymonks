import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-secondary-100">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-primary-500 mb-12">Privacy Policy</h1>
        
        <div className="space-y-12 text-secondary-100">
          <p className="text-lg text-secondary-300 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Our Commitment to Privacy</h2>
            <p className="text-secondary-300 leading-relaxed">
              At Security Monks, protecting your privacy is fundamental to our core mission. As cybersecurity experts,
              we understand the critical importance of data protection and privacy in today&apos;s digital landscape.
              This Privacy Policy outlines our comprehensive approach to handling your information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Information We Collect</h2>
            <p className="text-secondary-300 mb-4">We collect and process the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-secondary-300">
              <li>Essential contact information (name, email, phone number)</li>
              <li>Business details for enterprise clients</li>
              <li>Technical information necessary for security assessments (with explicit consent)</li>
              <li>Website usage data through secure analytics tools</li>
              <li>Communication preferences and interaction history</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">How We Protect Your Data</h2>
            <p className="text-secondary-300 mb-4">We implement robust security measures including:</p>
            <ul className="list-disc pl-6 space-y-2 text-secondary-300">
              <li>End-to-end encryption for sensitive data transmission</li>
              <li>Regular security audits and penetration testing</li>
              <li>Strict access controls and authentication mechanisms</li>
              <li>Data minimization and retention policies</li>
              <li>Regular staff training on data protection</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Your Data Rights</h2>
            <p className="text-secondary-300 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-secondary-300">
              <li>Access your personal data</li>
              <li>Request data correction or deletion</li>
              <li>Withdraw consent for data processing</li>
              <li>Request data portability</li>
              <li>Lodge complaints with supervisory authorities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Contact Our Privacy Team</h2>
            <p className="text-secondary-300">
              For any privacy-related queries or to exercise your data rights, please contact our dedicated privacy team at{' '}
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

export default PrivacyPolicy; 