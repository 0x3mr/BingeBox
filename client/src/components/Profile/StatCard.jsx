function StatCard({ title, value, subtitle, green, icon }) {
  return (
    <div className="bg-brand-surface border-brand-border border rounded-xl p-6 flex flex-col gap-6 transition hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-brand-primary">
      <div className="flex flex-col gap-1.5">
        <div className="font-normal text-textgray text-base leading-6">
          {title}
        </div>
        <div className="flex items-center gap-1.5">
          <div className="font-normal text-absolutewhite text-base leading-4">
            {value}
          </div>
          {icon}
        </div>
      </div>

      {subtitle && (
        <div className="flex items-center gap-2">
          <div
            className={`font-normal text-base leading-6 ${
              green ? "text-[#00c950]" : "text-textgray"
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
