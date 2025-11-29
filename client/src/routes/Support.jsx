import Header from "$/components/Navigation/Header";
import Footer from "$/components/Navigation/Footer";
import { useState } from "react";
// Import the new components
import SupportHero from "$/components/Support/SupportHero";
import ContactForm from "$/components/Support/ContactForm";
import FaqSection from "$/components/Support/FaqSection";
import AdditionalHelpBanner from "$/components/Support/AdditionalHelpBanner";

function Support() {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "What is BingeBox?",
      answer:
        "BingeBox is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      id: 1,
      question: "How can I subscribe?",
      answer:
        "You can subscribe to BingeBox through our Subscriptions page and choose a plan that best fits your needs.",
    },
    {
      id: 2,
      question: "What devices can I use?",
      answer:
        "BingeBox supports all major devices including smart TVs, laptops, tablets, and mobile phones.",
    },
    {
      id: 3,
      question: "How do I reset my password?",
      answer:
        'Go to your account settings, click on "Forgot Password," and follow the instructions sent to your registered email.',
    },
    {
      id: 4,
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription anytime without any additional charges.",
    },
    {
      id: 5,
      question: "Is customer support available 24/7?",
      answer:
        "Our support team is available 24/7 to help you with any issues you encounter.",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white">
      <Header />

      <main role="main" className="pt-[150px] pb-20">
        {/* Support Hero Section with Contact Form */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side of the hero */}
            <SupportHero />

            {/* Right side - Contact Form */}
            <ContactForm />
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <FaqSection
          faqs={faqs}
          expandedFaq={expandedFaq}
          setExpandedFaq={setExpandedFaq}
        />

        {/* Need Additional Help Banner Section */}
        <AdditionalHelpBanner />
      </main>

      <Footer />
    </div>
  );
}

export default Support;
