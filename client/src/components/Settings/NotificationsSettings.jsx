export default function NotificationsSettings() {
  return (
    <section className="bg-brand-surface border border-brand-border rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Notifications</h2>

      <div className="space-y-4">
        {["Email Notifications", "Push Notifications", "SMS Alerts"].map(
          (notif) => (
            <div
              key={notif}
              className="flex items-center justify-between p-4 bg-brand-background border border-brand-border rounded-lg"
            >
              <p className="font-semibold text-absolutewhite">{notif}</p>
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
