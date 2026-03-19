"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactText from '@/components/sections/contact/ContactText';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import TextAnimation from '@/components/text/TextAnimation';
import { Sparkles, Camera, Aperture, Film, Zap, Image } from 'lucide-react';

export default function LandingPage() {
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

      <div id="headliner" data-section="headliner" className="w-full py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <TextAnimation
            type="entrance-slide"
            title="MISAELS PHOTOGRAPHY"
          />
        </div>
      </div>

      <div id="hero" data-section="hero">
        <SocialProofOne
          title="Live Feed from Instagram"
          description="Follow my latest work and behind-the-scenes moments. Stay connected with my photography journey."
          names={[
            "Behind-the-Scenes Access",            "Exclusive Previews",            "Photography Tips & Tutorials",            "Follower Community"
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Instagram Live Feed"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Follow on Instagram", href: "https://instagram.com/misaelsphotography" },
            { text: "View Portfolio", href: "/portfolio" }
          ]}
          buttonAnimation="slide-up"
          speed={40}
          showCard={true}
          ariaLabel="Instagram live feed section"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Photographer Based in New Jersey"
          description="I specialize in capturing authentic moments through portraiture and real-life storytelling. My work focuses on bringing out the genuine emotion and beauty in every frame. With a passion for cinematic aesthetics and detail-oriented approach, I transform fleeting moments into timeless memories."
          tag="About Me"
          tagIcon={Camera}
          tagAnimation="slide-up"
          bulletPoints={[
            {
              title: "Storytelling Through Portraits",              description: "Every portrait session is a collaboration to capture your unique narrative and personality.",              icon: Aperture
            },
            {
              title: "Cinematic Quality",              description: "Inspired by high-end DSLR photography, creating cinematic and professional results.",              icon: Film
            },
            {
              title: "Real Moments Matter",              description: "Focusing on authentic, unscripted moments that tell the true story of your event.",              icon: Zap
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773930004164-z4y07pms.jpg"
          imageAlt="photographer portrait professional headshot studio"
          mediaAnimation="slide-up"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "View My Work", href: "/portfolio" }
          ]}
          buttonAnimation="slide-up"
          ariaLabel="About section with photographer bio"
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardTwo
          title="Portfolio Showcase"
          description="A curated collection of my finest work across different styles and moments. Each image represents a story, an emotion, and a commitment to excellence."
          tag="Gallery"
          tagIcon={Image}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "portrait-1",              brand: "Portraits",              name: "Studio Portraits",              price: "Professional",              rating: 5,
              reviewCount: "Premium",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773930521926-r1of9l15.jpg",              imageAlt: "professional studio portrait lighting setup dark background"
            },
            {
              id: "portrait-2",              brand: "Portraits",              name: "Environmental Portraits",              price: "Story-Driven",              rating: 5,
              reviewCount: "Authentic",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773930318289-ohch7oj5.jpg",              imageAlt: "environmental portrait outdoor professional photography"
            },
            {
              id: "lifestyle-1",              brand: "Lifestyle",              name: "Lifestyle Sessions",              price: "Candid",              rating: 5,
              reviewCount: "Natural",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773930533701-l9gcnazp.jpg",              imageAlt: "lifestyle photography candid moments natural lighting"
            },
            {
              id: "lifestyle-2",              brand: "Lifestyle",              name: "Cultural Moments",              price: "Vibrant",              rating: 5,
              reviewCount: "Diverse",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773930368710-ts06xwgu.jpg",              imageAlt: "cultural photography diverse people moments authentic"
            },
            {
              id: "graduation-1",              brand: "Graduation",              name: "Graduation Photos",              price: "Celebratory",              rating: 5,
              reviewCount: "Memorable",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773930381028-63kwn8sl.jpg",              imageAlt: "graduation photography professional portrait session cap gown"
            },
            {
              id: "bw-1",              brand: "Black & White",              name: "Timeless Black & White",              price: "Classic",              rating: 5,
              reviewCount: "Elegant",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773930392089-0pxfz0bx.jpg",              imageAlt: "black and white portrait photography professional timeless"
            }
          ]}
          gridVariant="bento-grid"
          animationType="blur-reveal"
          buttons={[
            { text: "Book a Session", href: "/booking" }
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Portfolio gallery grid section"
        />
      </div>

      <div id="booking" data-section="booking">
        <ContactText
          text="Ready to book your session? Fill out the form below and let's create something beautiful together."
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Book Now", href: "/booking" },
            { text: "Contact Us", href: "/contact-us" }
          ]}
          animationType="entrance-slide"
          ariaLabel="Booking section call to action"
        />
      </div>

      <div id="contact" data-section="contact">
        <FooterSimple
          columns={[
            {
              title: "Contact",              items: [
                { label: "Email: walkingforward01@gmail.com", href: "mailto:walkingforward01@gmail.com" },
                { label: "Instagram: @misaelsphotography", href: "https://instagram.com/misaelsphotography" }
              ]
            },
            {
              title: "Quick Links",              items: [
                { label: "Portfolio", href: "/portfolio" },
                { label: "About", href: "#about" },
                { label: "Book Now", href: "/booking" }
              ]
            },
            {
              title: "Follow",              items: [
                { label: "Instagram", href: "https://instagram.com/misaelsphotography" },
                { label: "Message on Instagram", href: "https://instagram.com/misaelsphotography" }
              ]
            }
          ]}
          bottomLeftText="Misael's Photography © 2024. All rights reserved."
          bottomRightText="Capturing moments, telling stories."
          ariaLabel="Site footer with contact and navigation"
        />
      </div>
    </ThemeProvider>
  );
}