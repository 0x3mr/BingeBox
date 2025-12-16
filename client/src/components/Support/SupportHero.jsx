// Support Hero Section - Left Side Content
function SupportHero() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Welcome to our
        <br />
        support page!
      </h1>
      <p className="text-textgray text-lg mb-8">
        We're here to help you with any problems you may be having with our
        product.
      </p>

      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-2/3 rounded-lg ${
              i % 4 === 0
                ? "bg-linear-to-br from-blue-600 to-cyan-700"
                : i % 4 === 1
                  ? "bg-linear-to-br from-blue-800 to-indigo-900"
                  : i % 4 === 2
                    ? "bg-linear-to-br from-cyan-600 to-blue-700"
                    : "bg-linear-to-br from-sky-500 to-indigo-700"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SupportHero;
