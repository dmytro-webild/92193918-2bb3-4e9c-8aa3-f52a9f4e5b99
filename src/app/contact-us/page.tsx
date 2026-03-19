"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Mail, Instagram } from 'lucide-react';

export default function ContactUsPage() {
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

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Contact Me"
          description="Reach out through Instagram or email to discuss your photography session and let's create something beautiful together."
          tagIcon={Mail}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Send Message"
          termsText="By reaching out, you're agreeing to discuss your photography needs with me."
          ariaLabel="Contact section with Instagram and email information"
        />
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
                { label: "Portfolio", href: "/portfolio" },
                { label: "About", href: "/#about" },
                { label: "Book Now", href: "/#booking" }
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