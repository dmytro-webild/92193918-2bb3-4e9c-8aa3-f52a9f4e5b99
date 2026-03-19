"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioImages = [
  {
    id: 1,
    src: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773929743067-11gh4u5h.jpg',
    alt: 'Portfolio image 1'
  },
  {
    id: 2,
    src: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773929743068-tlxnossh.jpg',
    alt: 'Portfolio image 2'
  },
  {
    id: 3,
    src: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773929743068-vld55ryg.jpg',
    alt: 'Portfolio image 3'
  },
  {
    id: 4,
    src: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773929743068-jkx2y095.jpg',
    alt: 'Portfolio image 4'
  },
  {
    id: 5,
    src: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773929743068-x0adnlrw.jpg',
    alt: 'Portfolio image 5'
  }
];

export default function PortfolioPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? portfolioImages.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === portfolioImages.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
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

      <div id="portfolio" data-section="portfolio" className="w-full min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Portfolio Gallery</h1>
            <p className="text-lg text-foreground/80">Click on any image to view it in full detail</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setSelectedImageIndex(index)}
                className="relative overflow-hidden rounded-lg cursor-pointer group h-64 md:h-72"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-3">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>

            <div className="max-w-4xl max-h-full flex items-center justify-center">
              <img
                src={portfolioImages[selectedImageIndex].src}
                alt={portfolioImages[selectedImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              {selectedImageIndex + 1} / {portfolioImages.length}
            </div>
          </div>
        </div>
      )}

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