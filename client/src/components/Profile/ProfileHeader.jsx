import { useSelector } from "react-redux";

function ProfileHeader() {
  const authUser = useSelector((state) => state.auth.user);
  const profile = useSelector((state) => state.profile.profile);
  const user = profile || authUser;

  if (!user) {
    return (
      <section className="flex flex-col md:flex-row items-start justify-between w-full gap-4">
        <p className="text-[#9e9ea9]">No user data available.</p>
      </section>
    );
  }

  const initials = user.fullName
    ? user.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : (user.email || "U")[0].toUpperCase();

  return (
    <section className="flex flex-col md:flex-row items-start justify-between w-full gap-4">
      <div className="flex items-start gap-5">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full border-4 border-brand-primary bg-zinc-800 flex items-center justify-center text-[#f9f9f9] text-2xl font-normal">
          {initials}
        </div>

        {/* User Info */}
        <div className="flex flex-col gap-2 pt-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="font-normal text-[#f9f9f9] text-base leading-6">
              {user.fullName || user.email}
            </h1>
            {user.premium === "yes" && (
              <span className="h-5 px-2 py-0.5 rounded-lg bg-linear-to-r from-brand-primary to-brand-secondary text-white text-xs leading-4 inline-flex items-center">
                Premium Member
              </span>
            )}
          </div>

          <p className="font-normal text-[#9e9ea9] text-base leading-6">
            {user.email}
          </p>

          {/* Stats (still dummy for now) */}
          <div className="flex items-center gap-4 flex-wrap">
            <ProfileHeader.Stat icon="icon-4" label="342 watched" />
            <ProfileHeader.Stat icon="icon-6" label="487 hours" />
            <ProfileHeader.Stat icon="icon-12" label="52 favorites" />
          </div>
        </div>
      </div>

      <button className="px-3 py-2 bg-zinc-900 rounded-lg border border-[#26262a] hover:bg-zinc-800 transition-colors flex items-center">
        <img
          className="w-4 h-4 mr-2"
          alt="Edit icon"
          src="https://c.animaapp.com/mhj4bhqeU8XhYM/img/icon-1.svg"
        />
        <span className="font-normal text-[#f9f9f9] text-sm leading-5">
          Edit Profile
        </span>
      </button>
    </section>
  );
}

ProfileHeader.Stat = function Stat({ icon, label }) {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-4 h-4"
        alt="Icon"
        src={`https://c.animaapp.com/mhj4bhqeU8XhYM/img/${icon}.svg`}
      />
      <span className="font-normal text-[#9e9ea9] text-base leading-6 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default ProfileHeader;
