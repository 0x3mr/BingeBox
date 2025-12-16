// Contact Form Section - Right Side
function ContactForm() {
  return (
    <div className="border border-brand-border rounded-xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-absolutewhite font-semibold mb-3">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-absolutewhite placeholder-textgray focus:outline-none focus:border-brand-primary"
          />
        </div>
        <div>
          <label className="block text-absolutewhite font-semibold mb-3">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-absolutewhite placeholder-textgray focus:outline-none focus:border-brand-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-absolutewhite font-semibold mb-3">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-absolutewhite placeholder-textgray focus:outline-none focus:border-brand-primary"
          />
        </div>
        <div>
          <label className="block text-absolutewhite font-semibold mb-3">
            Phone Number
          </label>
          <div className="flex gap-2">
            <select className="bg-brand-surface border border-brand-border rounded-lg px-3 py-3 text-absolutewhite focus:outline-none focus:border-brand-primary">
              <option>EG</option>
            </select>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="flex-1 bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-absolutewhite placeholder-textgray focus:outline-none focus:border-brand-primary"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-absolutewhite font-semibold mb-3">Message</label>
        <textarea
          rows="5"
          placeholder="Enter your Message"
          className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-absolutewhite placeholder-textgray focus:outline-none focus:border-brand-primary resize-none"
        ></textarea>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-5 h-5 bg-brand-surface border border-brand-border rounded"
          />
          <span className="text-textgray text-sm">
            I agree with Terms of Use and Privacy Policy
          </span>
        </label>
        <button className="bg-brand-primary hover:bg-brand-secondary text-absolutewhite px-8 py-3 rounded-lg font-semibold transition">
          Send Message
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
