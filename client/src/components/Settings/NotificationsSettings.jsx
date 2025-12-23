import { useState } from "react";
import Toggle from "../Shared/Toggle";

export default function NotificationsSettings() {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [smsAlerts, setSmsAlerts] = useState(false);

  return (
    <section className="bg-brand-surface border border-brand-border rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Notifications</h2>

      <div className="space-y-4">
        {[
          ["Email Notifications", emailNotifications, setEmailNotifications],
          ["Push Notifications", pushNotifications, setPushNotifications],
          ["SMS Alerts", smsAlerts, setSmsAlerts],
        ].map(([label, state, setter]) => (
          <div
            key={label}
            className="flex items-center justify-between p-4 bg-brand-background border border-brand-border rounded-lg"
          >
            <p className="font-semibold text-absolutewhite">{label}</p>
            <Toggle
              checked={state}
              onChange={setter}
              label={label}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
