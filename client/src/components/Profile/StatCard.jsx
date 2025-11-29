function StatCard({ title, value, subtitle, green, icon }) {
  return (
    <div className="bg-zinc-900 border-[#26262a] border rounded-xl p-6 flex flex-col gap-6 transition hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-[#3a3a3f]">
      <div className="flex flex-col gap-1.5">
        <div className="font-normal text-[#9e9ea9] text-base leading-6">
          {title}
        </div>
        <div className="flex items-center gap-1.5">
          <div className="font-normal text-[#f9f9f9] text-base leading-4">
            {value}
          </div>
          {icon}
        </div>
      </div>

      {subtitle && (
        <div className="flex items-center gap-2">
          <div
            className={`font-normal text-base leading-6 ${
              green ? "text-[#00c950]" : "text-[#9e9ea9]"
            }`}
          >
            {subtitle}
          </div>
        </div>
      )}
    </div>
  );
}

export default StatCard;
