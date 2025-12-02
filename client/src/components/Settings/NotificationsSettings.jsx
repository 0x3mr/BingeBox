export default function NotificationsSettings() {
  return (
    <section className="bg-white/5 border border-white/10 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Notifications</h2>

      <div className="space-y-4">
        {["Email Notifications", "Push Notifications", "SMS Alerts"].map(
          (notif) => (
            <div
              key={notif}
              className="flex items-center justify-between p-4 bg-neutral-900 border border-white/10 rounded-lg"
            >
              <p className="font-semibold">{notif}</p>
              <input
                type="checkbox"
                className="w-6 h-6 rounded cursor-pointer"
              />
            </div>
          ),
        )}
      </div>
    </section>
  );
}
