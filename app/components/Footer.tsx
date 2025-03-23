'use client';

import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { useCallback, useEffect, useState } from 'react';
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const Footer = () => {
  // Add state to track if component is mounted (client-side)
  const [isMounted, setIsMounted] = useState(false);
  
  // Initialize particles on the client side only
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  
  return (
    <footer className="relative bg-black text-secondary-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      {/* Particles Background - Added directly in the footer with unique ID */}
      {isMounted && (
        <Particles
          id="footerParticles"
          className="absolute inset-0"
          init={particlesInit}
          options={{
            fpsLimit: 120,
            fullScreen: { enable: false },
            background: {
              color: {
                value: "transparent",
              },
            },
            particles: {
              color: {
                value: "#DC8C3C",
              },
              links: {
                color: "#DC8C3C",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60, // Reduced slightly from hero for better performance
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      
      <div className="relative max-w-7xl mx-auto py-8 px-4 md:px-8 lg:px-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="flex flex-col items-start space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary-500">
                <span className="relative inline-block">
                  Security Monks
                </span>
              </h3>
              <p className="text-secondary-300 max-w-md">
                Providing cutting-edge cybersecurity solutions to protect what matters most.
              </p>
            </div>
            
            <div className="flex gap-4">
              {[
                { name: 'Twitter', url: 'https://twitter.com', icon: <FaTwitter size={18} /> },
                { name: 'LinkedIn', url: 'https://linkedin.com/company/the-security-monks/', icon: <FaLinkedinIn size={18} /> }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary-700/50 hover:bg-primary-500 
                           flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="text-secondary-300 group-hover:text-white">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:items-end space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 md:text-right text-primary-500">
                <span className="relative inline-block">
                  Contact Us
                </span>
              </h3>
              <div className="space-y-3 text-secondary-300 md:text-right">
                <p className="hover:text-primary-400 transition-colors duration-300">
                  <a href="mailto:knock@securitymonks.in">knock@securitymonks.in</a>
                </p>
                <p className="hover:text-primary-400 transition-colors duration-300">
                  <a href="tel:+919587752466">(+91) 95877 52466</a>
                </p>
                <p>213, Optus Corporate Suites, Bhiwadi, Rajasthan, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-secondary-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-400">
            <p>© {new Date().getFullYear()} Security Monks. All rights reserved.</p>
            <div className="flex gap-6">
              {[
                { name: 'Privacy Policy', url: '/privacy' },
                { name: 'Terms of Service', url: '/terms' },
                { name: 'Cookie Policy', url: '/cookies' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;