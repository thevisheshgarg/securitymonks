import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-black text-secondary-100">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-primary-500 mb-12">Cookie Policy</h1>
        
        <div className="space-y-12 text-secondary-100">
          <p className="text-lg text-secondary-300 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Understanding Our Cookie Usage</h2>
            <p className="text-secondary-300 leading-relaxed">
              At Security Monks, we use cookies and similar technologies to enhance your browsing experience
              while maintaining the highest standards of security. This policy explains how we implement
              these technologies responsibly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Types of Cookies We Use</h2>
            <ul className="space-y-3 text-secondary-300">
              <li>
                <strong className="text-primary-500">Essential Cookies:</strong>
                {' '}Required for basic website functionality and security features
              </li>
              <li>
                <strong className="text-primary-500">Analytical Cookies:</strong>
                {' '}Help us understand how visitors interact with our website
              </li>
              <li>
                <strong className="text-primary-500">Functional Cookies:</strong>
                {' '}Remember your preferences and settings
              </li>
              <li>
                <strong className="text-primary-500">Security Cookies:</strong>
                {' '}Support our security features and detect malicious activity
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Cookie Security Measures</h2>
            <p className="text-secondary-300">We protect our cookie data through:</p>
            <ul className="list-disc pl-6 space-y-2 text-secondary-300">
              <li>Encryption of cookie contents where appropriate</li>
              <li>Regular security audits of cookie usage</li>
              <li>Strict access controls to cookie data</li>
              <li>Compliance with data protection regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Managing Cookie Preferences</h2>
            <p className="text-secondary-300">
              You can control cookies through your browser settings. Options typically include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-secondary-300">
              <li>Blocking all or certain types of cookies</li>
              <li>Deleting cookies periodically</li>
              <li>Browsing in private/incognito mode</li>
              <li>Accepting cookies only from visited websites</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-6">Questions About Cookies?</h2>
            <p className="text-secondary-300">
              For any questions about our cookie practices, please contact our security team at{' '}
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

export default CookiePolicy; 