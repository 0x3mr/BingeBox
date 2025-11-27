import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

function Support() {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const faqs = [
    {
      id: 0,
      question: 'What is BingeBox?',
      answer: 'BingeBox is a streaming service that allows you to watch movies and shows on demand.',
    },
    {
      id: 1,
      question: 'How can I subscribe?',
      answer: 'You can subscribe to BingeBox through our Subscriptions page and choose a plan that best fits your needs.',
    },
    {
      id: 2,
      question: 'What devices can I use?',
      answer: 'BingeBox supports all major devices including smart TVs, laptops, tablets, and mobile phones.',
    },
    {
      id: 3,
      question: 'How do I reset my password?',
      answer: 'Go to your account settings, click on "Forgot Password," and follow the instructions sent to your registered email.',
    },
    {
      id: 4,
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription anytime without any additional charges.',
    },
    {
      id: 5,
      question: 'Is customer support available 24/7?',
      answer: 'Our support team is available 24/7 to help you with any issues you encounter.',
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white">
      <Header />

      <main role="main" className="pt-[150px] pb-20">
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Welcome to our<br />support page!
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                We're here to help you with any problems you may be having with
                our product.
              </p>

              <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-2/3 rounded-lg ${
                      i % 4 === 0
                        ? 'bg-gradient-to-br from-blue-600 to-cyan-700'
                        : i % 4 === 1
                        ? 'bg-gradient-to-br from-blue-800 to-indigo-900'
                        : i % 4 === 2
                        ? 'bg-gradient-to-br from-cyan-600 to-blue-700'
                        : 'bg-gradient-to-br from-sky-500 to-indigo-700'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            <div className="border border-gray-900 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-3">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-3">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select className="bg-[#0a0a0a] border border-gray-800 rounded-lg px-3 py-3 text-white focus:outline-none focus:border-brand-primary">
                      <option>EG</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      className="flex-1 bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-3">Message</label>
                <textarea
                  rows="5"
                  placeholder="Enter your Message"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 bg-[#0a0a0a] border border-gray-800 rounded"
                  />
                  <span className="text-gray-400 text-sm">
                    I agree with Terms of Use and Privacy Policy
                  </span>
                </label>
                <button className="bg-brand-primary hover:bg-[#3A99D8] text-white px-8 py-3 rounded-lg font-semibold transition">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400">
                Got questions? We've got answers! Check out our FAQ section to
                find answers to the most common questions about BingeBox.
              </p>
            </div>
            <button className="bg-brand-primary hover:bg-[#3A99D8] text-white px-6 py-3 rounded-lg font-semibold transition">
              Ask a Question
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              {faqs.slice(0, 3).map((faq) => (
                <div key={faq.id} className="border border-gray-800 rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4 flex-1">
                      <span className="text-white font-bold text-xl">
                        {String(faq.id + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-3">
                          {faq.question}
                        </h3>
                        {expandedFaq === faq.id && (
                          <p className="text-gray-400">{faq.answer}</p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setExpandedFaq(expandedFaq === faq.id ? -1 : faq.id)
                      }
                      className="text-white text-2xl"
                    >
                      {expandedFaq === faq.id ? '−' : '+'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {faqs.slice(3).map((faq) => (
                <div key={faq.id} className="border border-gray-800 rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4 flex-1">
                      <span className="text-white font-bold text-xl">
                        {String(faq.id + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-3">
                          {faq.question}
                        </h3>
                        {expandedFaq === faq.id && (
                          <p className="text-gray-400">{faq.answer}</p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setExpandedFaq(expandedFaq === faq.id ? -1 : faq.id)
                      }
                      className="text-white text-2xl"
                    >
                      {expandedFaq === faq.id ? '−' : '+'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="bg-brand-surface/40 border border-brand-border/50 backdrop-blur-md rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Need Additional Help?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Contact our support team for personalized assistance anytime,
              anywhere.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="mailto:support@bingebox.com"
                className="bg-brand-primary hover:bg-[#3A99D8] text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Email Support
              </a>
              <a
                href="tel:+1234567890"
                className="border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Support;
