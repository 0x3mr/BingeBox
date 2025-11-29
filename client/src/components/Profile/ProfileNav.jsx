import ProfileNavItem from "./ProfileNavItem";

function ProfileNav() {
  return (
    <nav className="w-full max-w-[1312px] flex flex-col gap-[7.99px] px-[15.99px]">
      <ProfileNavItem icon="icon-3" label="Continue Watching" />
      <ProfileNavItem icon="icon-2" label="My Watchlist" />
      <ProfileNavItem icon="icon-6" label="Watch History" />
      <ProfileNavItem icon="icon-10" label="Account Settings" to="/settings" />
    </nav>
  );
}

export default ProfileNav;
