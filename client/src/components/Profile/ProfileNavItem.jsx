import { Link } from "react-router-dom";

function ProfileNavItem({ icon, label, to }) {
  const content = (
    <div className="flex items-center justify-between p-0 h-[55.99px]">
      <div className="flex items-center gap-[11.99px] pl-[13px]">
        <img
          className="w-[15.99px] h-[15.99px]"
          alt={label}
          src={`https://c.animaapp.com/mhj4bhqeU8XhYM/img/${icon}.svg`}
        />
        <span className="font-normal text-absolutewhite text-sm whitespace-nowrap">
          {label}
        </span>
      </div>

      <svg
        className="w-4 h-4 text-absolutewhite mr-11"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </div>
  );

  if (to) {
    return (
      <Link
        to={to}
        className="bg-brand-surface border-[1.27px] border-brand-border rounded-lg cursor-pointer hover:bg-brand-background transition-colors"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="bg-brand-surface border-[1.27px] border-brand-border rounded-lg cursor-pointer hover:bg-brand-background transition-colors">
      {content}
    </div>
  );
}

export default ProfileNavItem;
