"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Camera, MessageSquare } from 'lucide-react';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="mediumLargeSizeLargeTitles"
      background="grid"
      cardStyle="inset"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Misael's Photography"
          navItems={[
            { name: "Portfolio", id: "portfolio" },
            { name: "About", id: "about" },
            { name: "Book Now", id: "booking" },
            { name: "Contact", id: "contact-us" }
          ]}
          button={{
            text: "Follow on Instagram",            href: "https://instagram.com/misaelsphotography"
          }}
        />
      </div>

      <div id="booking" data-section="booking" className="w-full min-h-screen py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Book Your Session</h1>
            <p className="text-lg text-foreground/80">Let's create something beautiful together. Fill out the form below to request your photography session.</p>
          </div>

          {submitted ? (
            <div className="bg-green-500/20 border border-green-500 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
              <p className="text-foreground/80">Your booking request has been received. I'll get back to you soon to confirm the details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-lg p-8 shadow-lg">
              {/* Contact Details Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Details
                </h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-2 rounded-lg bg-background border border-accent/30 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary-cta transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 rounded-lg bg-background border border-accent/30 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary-cta transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-2 rounded-lg bg-background border border-accent/30 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary-cta transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Service Selection
                </h3>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Select a Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-accent/30 text-foreground focus:outline-none focus:border-primary-cta transition-colors"
                  >
                    <option value="" disabled>Choose a service...</option>
                    <option value="studio-portraits">Studio Portraits</option>
                    <option value="environmental-portraits">Environmental Portraits</option>
                    <option value="lifestyle-session">Lifestyle Session</option>
                    <option value="graduation-photos">Graduation Photos</option>
                    <option value="cultural-moments">Cultural Moments</option>
                    <option value="black-and-white">Black & White Session</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Session Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-accent/30 text-foreground focus:outline-none focus:border-primary-cta transition-colors"
                  />
                </div>
              </div>

              {/* Additional Details Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Additional Details
                </h3>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell me about your vision (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your photography session ideas, preferred locations, style preferences, or any special requests..."
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-accent/30 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary-cta transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-primary-cta text-primary-cta-text rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Submit Booking Request
                </button>
                <a
                  href="mailto:walkingforward01@gmail.com"
                  className="flex-1 px-6 py-3 bg-secondary-cta text-secondary-cta-text border border-accent/30 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
                >
                  Email Direct
                </a>
              </div>

              <p className="text-xs text-foreground/60 text-center">
                * Required fields. I'll respond within 24-48 hours to confirm your session details.
              </p>
            </form>
          )}
        </div>
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Contact Information",              items: [
                { label: "Email: walkingforward01@gmail.com", href: "mailto:walkingforward01@gmail.com" },
                { label: "Instagram: @misaelsphotography", href: "https://instagram.com/misaelsphotography" }
              ]
            },
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "About", href: "/#about" }
              ]
            },
            {
              title: "Follow Me",              items: [
                { label: "Instagram", href: "https://instagram.com/misaelsphotography" },
                { label: "Direct Message", href: "https://instagram.com/misaelsphotography" }
              ]
            }
          ]}
          bottomLeftText="Misael's Photography © 2024. All rights reserved."
          bottomRightText="Capturing moments, telling stories."
          ariaLabel="Site footer with contact information"
        />
      </div>
    </ThemeProvider>
  );
}
