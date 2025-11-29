import TrendingCard from "$/components/Home/TrendingCard";

export default function TrendingSection() {
  return (
    <section className="w-full px-4 md:px-[47px] py-8 mt-8">
      <h2 className="font-medium text-white text-[28px] mb-6 -translate-y-4">
        Latest & Trending
      </h2>

      <div className="flex items-end gap-2.5 overflow-x-auto overflow-y-clip -translate-y-4 pb-2">
        <TrendingCard
          rank={1}
          image="https://c.animaapp.com/mheyiw4rvyrlVB/img/rectangle-4-2.svg"
        />
      </div>
    </section>
  );
}
