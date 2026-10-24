const fs = require('fs');
const path = require('path');

const dataJsonPath = path.join(__dirname, '..', 'data', 'data.json');
const rawData = JSON.parse(fs.readFileSync(dataJsonPath, 'utf8'));

// The user's exact Investment object:
const investmentSections = {
  "Hero": {
    "variants": {
      "InvestmentAboutHero1": { "title": "About Us", "image": "/banner.webp" },
      "InvestmentContactHero1": { "title": "Contact Us", "image": "/banner.webp" },
      "InvestmentBlogHero1": { "title": "Blogs", "image": "/banner.webp" },
      "InvestmentServicesHero1": { "title": "Our Services", "image": "/banner.webp" },
      "InvestmentProcessHero1": { "title": "Investment Process", "image": "/banner.webp" },
      "InvestmentBlogDetailHero1": { "title": "Blog Detail", "image": "/banner.webp" },
      "InvestmentServiceDetailHero1": { "title": "Service Detail", "image": "/banner.webp" },
      "InvestmentMissionVisionHero1": { "title": "Mission & Vision", "image": "/banner.webp" },
      "InvestmentWhyChooseUsHero1": { "title": "Why Choose Us", "image": "/banner.webp" },
      "InvestmentOurTeamHero1": { "title": "Our Team", "image": "/banner.webp" },
      "InvestmentTeamDetailsHero1": { "title": "Team Detail", "image": "/banner.webp" },
      "InvestmentPartnersHero1": { "title": "Our Partners", "image": "/banner.webp" },
      "InvestmentTestimonialsHero1": { "title": "Testimonials", "image": "/banner.webp" },
      "InvestmentFaqHero1": { "title": "FAQ", "image": "/banner.webp" },
      "InvestmentAwardsHero1": { "title": "Awards & Achievements", "image": "/banner.webp" },
      "InvestmentPrivacyHero1": { "title": "Privacy & Policy", "image": "/banner.webp" },
      "InvestmentSitemapHero1": { "title": "Sitemap", "image": "/banner.webp" },
      "InvestmentDisclaimerHero1": { "title": "Disclaimer", "image": "/banner.webp" },
      "InvestmentTermsHero1": { "title": "Terms & Conditions", "image": "/banner.webp" },
      "InvestmentThankYouHero1": { "title": "Thank You", "image": "/banner.webp" },
      "InvestmentConsultationHero1": { "title": "Book Consultation", "image": "/banner.webp" }
    }
  },
  "HomeHero": {
    "variants": {
      "InvestmentHomeHero1": {
        "image": "/hero.webp",
        "imageAlt": "PrimeCore Investment Advisor",
        "badge": "SMART INVESTMENTS. BRIGHTER POSSIBILITIES.",
        "titleStart": "Build Wealth",
        "titleBeforeHighlight": "with",
        "titleHighlight": "Clarity",
        "titleEnd": "and Confidence.",
        "description": "At PrimeCore, we provide expert investment advisory services designed to help you achieve your financial goals and create a more secure tomorrow.",
        "primaryButton": "Book a Consultation",
        "primaryLink": "/bookConsultation",
        "secondaryButton": "Explore Our Services",
        "secondaryLink": "/service",
        "features": [
          { "title": "Personalized Strategies", "description": "Tailored to your unique goals." },
          { "title": "Trusted Expertise", "description": "Guidance from experienced financial advisors." },
          { "title": "Long-Term Focus", "description": "Building sustainable wealth for future generations." }
        ],
        "sidebar": {
          "topWords": ["PLAN", "INVEST", "GROW", "ACHIEVE"],
          "brand": "PRIMECORE",
          "bottomLines": ["A STRONGER", "TOMORROW", "STARTS", "TODAY."]
        }
      }
    }
  },
  "About": {
    "variants": {
      "InvestmentAbout1": {
        "image": "/about.webp",
        "imageAlt": "PrimeCore Investment Advisors",
        "badge": "ABOUT US",
        "titleStart": "Empowering Businesses",
        "titleMiddle": "To Grow",
        "titleHighlight": "Smarter",
        "description": "At PrimeCore, we are committed to helping businesses and individuals make informed financial decisions. With deep market knowledge and a client-first approach, we provide tailored investment advisory solutions designed to create long-term value and sustainable growth.",
        "features": [
          { "icon": "BarChart3", "title": "Strategic", "subtitle": "Advisory", "description": "Data-driven strategies for measurable growth." },
          { "icon": "ShieldCheck", "title": "Trusted", "subtitle": "Partnership", "description": "A relationship built on integrity and trust." },
          { "icon": "Users", "title": "Client-Centric", "subtitle": "Approach", "description": "Your goals, our priority in every decision." }
        ],
        "buttonText": "Know More",
        "buttonLink": "/aboutus",
        "callout": "Turn Your Financial Goals\\nInto Real Opportunities."
      }
    }
  },
  "Services": {
    "variants": {
      "InvestmentServices1": {
        "image": "/service.webp",
        "imageAlt": "PrimeCore Financial Services",
        "badge": "OUR SERVICES",
        "titleStart": "Tailored Financial Solutions\\nFor Your",
        "titleHighlight": "Greater Tomorrow",
        "description": "At PrimeCore, we deliver expert-driven financial services to help you plan, grow, and secure what matters most. Our solutions are designed around your goals, with clarity and confidence.",
        "serviceLink": "/service/serviceDetail",
        "items": [
          { "icon": "Shield", "title": "Wealth", "subtitle": "Management", "description": "Preserve, grow, and transfer your wealth.", "href": "/service/wealth-management" },
          { "icon": "FileText", "title": "Financial", "subtitle": "Planning", "description": "Personalized plans for every life stage.", "href": "/service/financial-planning" },
          { "icon": "Globe2", "title": "Global", "subtitle": "Opportunities", "description": "Access international markets with confidence.", "href": "/service/global-opportunities" },
          { "icon": "Users", "title": "Retirement", "subtitle": "Planning", "description": "Build a secure and independent future.", "href": "/service/retirement-planning" },
          { "icon": "PieChart", "title": "Risk", "subtitle": "Management", "description": "Identify, assess, and minimize financial risks.", "href": "/service/risk-management" },
          { "icon": "Sprout", "title": "Tax", "subtitle": "Consulting", "description": "Smarter tax solutions for higher savings.", "href": "/service/tax-planning" },
          { "icon": "Handshake", "title": "Business", "subtitle": "Advisory", "description": "Strategic support to accelerate growth.", "href": "/service/business-financial-advisory" },
          { "icon": "BarChart3", "title": "Investment", "subtitle": "Advisory", "description": "Expert guidance for confident decisions.", "href": "/service/investment-advisory" }
        ],
        "servicePage": {
          "badge": "OUR SERVICES",
          "titleStart": "Financial Solutions for",
          "titleHighlight": "Every Goal",
          "description": "From wealth creation to risk management, our services are designed to meet your unique financial needs at every stage of life.",
          "readMoreText": "Read More"
        },
        "getInTouch": {
          "image": "/contact.webp",
          "badge": "LET'S PLAN A BRIGHTER TOMORROW",
          "title": "Ready to Take the Next Step?",
          "description": "Connect with our experts today and get personalized financial guidance based on your goals.",
          "buttonText": "Get in Touch",
          "href": "/contact"
        }
      }
    }
  },
  "Faq": {
    "variants": {
      "InvestmentFaq1": {
        "badge": "FAQs",
        "titleStart": "Your Questions,",
        "titleHighlight": "Our Answers",
        "description": "We've answered some of the most common questions to help you better understand our services and how we can support your financial goals.",
        "faqs": [
          { "id": 1, "number": "01", "question": "What services does PrimeCore offer?", "answer": "We offer a comprehensive range of investment advisory services including wealth management, retirement planning, financial planning, tax planning, estate planning, and risk management." },
          { "id": 2, "number": "02", "question": "How do I get started with PrimeCore?", "answer": "Getting started is easy. Simply reach out to us through our contact form or give us a call to schedule an initial consultation." },
          { "id": 3, "number": "03", "question": "Are your investment strategies suitable for long-term goals?", "answer": "Absolutely. Our investment strategies are designed with a long-term perspective in mind, focusing on sustainable growth and wealth preservation." },
          { "id": 4, "number": "04", "question": "What makes PrimeCore different from other advisory firms?", "answer": "We pride ourselves on transparency, personalized service, and a client-first approach." },
          { "id": 5, "number": "05", "question": "Do you offer personalized financial plans?", "answer": "Yes, every financial plan we create is 100% personalized to your income, expenses, risk tolerance, and future goals." }
        ],
        "contact": {
          "titleStart": "Still Have",
          "titleHighlight": "Questions?",
          "description": "Our team is here to help you. Get in touch and we'll be happy to assist you.",
          "phoneLabel": "Call Us",
          "phone": "+1 00000 00000",
          "emailLabel": "Email Us",
          "email": "info@xyz.com",
          "buttonText": "Get in Touch",
          "buttonLink": "/contact"
        }
      }
    }
  },
  "ThankYouContent": {
    "variants": {
      "InvestmentThankYou1": {
        "title": "Thank You!",
        "description": "Your submission has been received. Our team will review it and get back to you shortly.",
        "buttonText": "Back to Home",
        "buttonHref": "/"
      }
    }
  }
};

// HotelResort sections:
const hotelResortSections = {
  "Hero": {
    "variants": {
      "HotelResortHomeHero1": {
        "title": "Where Tranquility Meets the Horizon",
        "subtitle": "An eco-luxe coastal sanctuary of timeless beauty, private pools and unhurried coastal living.",
        "image": "/images/pool-resort.webp"
      },
      "HotelResortAboutHero1": {
        "title": "About Us",
        "subtitle": "Discover the heritage, spirit and sanctuary architecture of Suryavana.",
        "image": "/images/pool-resort.webp"
      },
      "HotelResortContactHero1": {
        "title": "Contact Us",
        "subtitle": "Begin your journey. Our guest concierge is available around the clock.",
        "image": "/images/pool-resort.webp"
      },
      "HotelResortFaqHero1": {
        "title": "Frequently Asked Questions",
        "subtitle": "Everything you need to know about your coastal forest sanctuary escape.",
        "image": "/images/pool-resort.webp"
      },
      "HotelResortBlogHero1": {
        "title": "Sanctuary Journal & Blogs",
        "subtitle": "Stories of coastal architecture, Ayurvedic rhythms, and sustainable island living.",
        "image": "/images/pool-resort.webp"
      },
      "HotelResortDiningHero1": {
        "title": "Gastronomy & Dining",
        "subtitle": "From ocean-foraged catch to temple garden satvik menus under candlelight.",
        "image": "/images/dining.webp"
      },
      "HotelResortGalleryHero1": {
        "title": "Visual Sanctuary Gallery",
        "subtitle": "Moments of stillness, saltwater horizons, and coastal architecture.",
        "image": "/images/cliff-pool.webp"
      },
      "HotelResortRoomsHero1": {
        "title": "Rooms & Villas",
        "subtitle": "Private ocean sanctuaries, cliff plunge pavilions, and garden suites.",
        "image": "/images/room-ocean.webp"
      },
      "HotelResortWellnessHero1": {
        "title": "Ayurveda & Wellness",
        "subtitle": "Traditional panchakarma, singing bowl immersion, and sacred mineral pools.",
        "image": "/images/spa.webp"
      }
    }
  },
  "Faq": {
    "variants": {
      "HotelResortFaq1": {
        "badge": "FAQs",
        "eyebrow": "Sanctuary Inquiries",
        "titleStart": "Everything You",
        "titleHighlight": "Need to Know",
        "heading": "Everything You Need to Know",
        "subtitle": "Clear, thoughtful answers about your stay, private arrival, dining, and daily rituals.",
        "description": "Clear, thoughtful answers about your stay, private arrival, dining, and daily rituals.",
        "categories": [
          "Check-In & Stay",
          "Private Transfers",
          "Organic Gastronomy",
          "Flexibility Policy",
          "Holistic Wellness",
          "Family Sanctuaries"
        ],
        "faqs": [
          {
            "id": 1,
            "number": "01",
            "question": "What are the standard check-in and check-out timings?",
            "answer": "Check-in begins at 2:00 PM and check-out is until 11:00 AM. Early arrivals and late departures can be arranged with our concierge subject to suite availability.",
            "category": "Check-In & Stay"
          },
          {
            "id": 2,
            "number": "02",
            "question": "Do you provide airport transfers from Goa International Airport?",
            "answer": "Yes, we offer complimentary luxury chauffeur transfers for all villa bookings, and arranged transfers for deluxe suites upon request at least 24 hours in advance.",
            "category": "Private Transfers"
          },
          {
            "id": 3,
            "number": "03",
            "question": "Are private pool villas heated throughout the season?",
            "answer": "All private plunge pools and cliff-edge villas feature temperature-controlled water maintained between 28°C and 30°C year-round.",
            "category": "Holistic Wellness"
          },
          {
            "id": 4,
            "number": "04",
            "question": "Can dietary preferences and vegan/Jain meals be accommodated?",
            "answer": "Our executive chefs specialize in farm-to-table dining and gladly customize all tasting menus to vegan, gluten-free, satvik, and Jain specifications.",
            "category": "Organic Gastronomy"
          },
          {
            "id": 5,
            "number": "05",
            "question": "What is the cancellation policy for peak holiday reservations?",
            "answer": "Reservations may be cancelled with a full refund up to 14 days prior to arrival. Cancellations within 14 days receive a flexible 12-month resort credit.",
            "category": "Flexibility Policy"
          },
          {
            "id": 6,
            "number": "06",
            "question": "Is the resort family-friendly and suitable for young children?",
            "answer": "We welcome families and provide private family pavilions, bespoke nature trails, junior culinary classes, and certified nanny care.",
            "category": "Family Sanctuaries"
          }
        ],
        "items": [
          {
            "question": "What are the standard check-in and check-out timings?",
            "answer": "Check-in begins at 2:00 PM and check-out is until 11:00 AM. Early arrivals and late departures can be arranged with our concierge subject to suite availability."
          },
          {
            "question": "Do you provide airport transfers from Goa International Airport?",
            "answer": "Yes, we offer complimentary luxury chauffeur transfers for all villa bookings, and arranged transfers for deluxe suites upon request at least 24 hours in advance."
          },
          {
            "question": "Are private pool villas heated throughout the season?",
            "answer": "All private plunge pools and cliff-edge villas feature temperature-controlled water maintained between 28°C and 30°C year-round."
          },
          {
            "question": "Can dietary preferences and vegan/Jain meals be accommodated?",
            "answer": "Our executive chefs specialize in farm-to-table dining and gladly customize all tasting menus to vegan, gluten-free, satvik, and Jain specifications."
          },
          {
            "question": "What is the cancellation policy for peak holiday reservations?",
            "answer": "Reservations may be cancelled with a full refund up to 14 days prior to arrival. Cancellations within 14 days receive a flexible 12-month resort credit."
          },
          {
            "question": "Is the resort family-friendly and suitable for young children?",
            "answer": "We welcome families and provide private family pavilions, bespoke nature trails, junior culinary classes, and certified nanny care."
          }
        ]
      }
    }
  },
  "Cta": {
    "variants": {
      "HotelResortCta1": {
        "badge": "THE SURYAVANA SANCTUARY",
        "eyebrow": "THE SURYAVANA SANCTUARY",
        "headingBefore": "Where the ",
        "headingAccent": "sun",
        "headingAfter": " awakens the sanctuary.",
        "title": "Where the sun awakens the sanctuary.",
        "text": "Connect with our guest relations team to reserve your suite, curate bespoke rituals, or plan a private coastal sanctuary retreat.",
        "description": "Connect with our guest relations team to reserve your suite, curate bespoke rituals, or plan a private coastal sanctuary retreat.",
        "buttonText": "Contact Us",
        "buttonLink": "/contact",
        "cta": {
          "label": "Contact Us",
          "href": "/contact"
        }
      }
    }
  },
  "About": {
    "variants": {
      "HotelResortAbout1": {
        "badge": "ABOUT SURYAVANA",
        "title": "A Sanctuary Carved in Stone, Timber, and Salt Air",
        "description": "Born from a desire to create a sanctuary where time moves like tides, Suryavana brings together traditional temple stonecraft, sustainably harvested teak, and barefoot ocean serenity.",
        "buttonText": "Learn More",
        "buttonLink": "/about"
      }
    }
  },
  "Contact": {
    "variants": {
      "HotelResortContact1": {
        "badge": "GET IN TOUCH",
        "title": "We Look Forward to Welcoming You",
        "description": "Whether you are planning a wellness residency, private villa celebration, or sunset escape, our team is at your service.",
        "phone": "+1 00000 00000",
        "email": "info@xyz.com",
        "address": "100 Ocean Avenue, Santa Monica, CA 90401, United States"
      }
    }
  }
};

rawData.HotelResort = {
  templateComponents: {
    "template-1": {
      shared: {
        Header: "HotelResortHeader1",
        Footer: "HotelResortFooter1"
      },
      pages: {
        faq: {
          components: [
            { key: "Hero", component: "HotelResortFaqHero1" },
            { key: "Faq", component: "HotelResortFaq1" },
            { key: "Cta", component: "HotelResortCta1" }
          ]
        }
      }
    }
  },
  sections: hotelResortSections
};

rawData.Investment = {
  sections: investmentSections
};

// Also expose top-level sections so it works flexibly with both
rawData.sections = hotelResortSections;

fs.writeFileSync(dataJsonPath, JSON.stringify(rawData, null, 2), 'utf8');
console.log('Successfully updated data.json with HotelResort, Investment, and sections variants!');
