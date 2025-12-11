function SeriesDescription({ longDescription }) {
  return (
    <section className="mt-8 sm:mt-10 md:mt-12">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
        Description
      </h2>
      <p className="text-grey-60 leading-relaxed text-sm sm:text-base">
        {longDescription}
      </p>
    </section>
  );
}

export default SeriesDescription;
