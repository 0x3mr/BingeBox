// Frequently Asked Questions (FAQ) Section
function FaqSection({ faqs, expandedFaq, setExpandedFaq }) {
  // Component for an individual FAQ item
  const FaqItem = ({ faq }) => (
    <div key={faq.id} className="border border-gray-800 rounded-xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4 flex-1">
          <span className="text-white font-bold text-xl">
            {String(faq.id + 1).padStart(2, "0")}
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
          onClick={() => setExpandedFaq(expandedFaq === faq.id ? -1 : faq.id)}
          className="text-white text-2xl"
        >
          {expandedFaq === faq.id ? "−" : "+"}
        </button>
      </div>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
      <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about BingeBox.
          </p>
        </div>
        <button className="bg-brand-primary hover:bg-[#3A99D8] text-white px-6 py-3 rounded-lg font-semibold transition">
          Ask a Question
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {faqs.slice(0, 3).map((faq) => (
            <FaqItem key={faq.id} faq={faq} />
          ))}
        </div>

        <div className="space-y-4">
          {faqs.slice(3).map((faq) => (
            <FaqItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
