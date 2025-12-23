// Video quality, language, autoplay, subtitles, skip intro

import { useState } from "react";
import Toggle from "../Shared/Toggle";

export default function StreamingPreferences() {
  const [videoQuality, setVideoQuality] = useState("hd");
  const [alwaysShowSubtitles, setAlwaysShowSubtitles] = useState(false);
  const [autoPlayNext, setAutoPlayNext] = useState(true);
  const [skipIntro, setSkipIntro] = useState(true);

  return (
    <section className="bg-brand-surface border border-brand-border rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Streaming Preferences</h2>

      {/* Video Quality */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3">
          Video Quality
        </label>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["auto", "Auto", "Adjust automatically"],
            ["hd", "HD (1080p)", "High quality"],
            ["4k", "4K Ultra HD", "Best quality"],
          ].map(([value, title, desc]) => (
            <label
              key={value}
              className={`flex items-center p-4 bg-brand-background rounded-lg border ${
                videoQuality === value
                  ? "border-brand-primary"
                  : "border-brand-border hover:border-brand-primary transition"
              } cursor-pointer`}
            >
              <input
                type="radio"
                name="quality"
                value={value}
                checked={videoQuality === value}
                onChange={() => setVideoQuality(value)}
                className="mr-3 w-5 h-5"
              />
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-textgray">{desc}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Language Selection */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3">
          Language Preference
        </label>
        <select className="w-full md:w-1/2 bg-brand-background border border-brand-border rounded-lg px-4 py-3 text-absolutewhite">
          {["English", "Spanish", "French", "German", "Japanese"].map(
            (lang) => (
              <option key={lang}>{lang}</option>
            ),
          )}
        </select>
      </div>

      {/* Toggle Switches */}
      <div>
        <label className="block text-sm font-semibold mb-3">
          Playback Settings
        </label>

        <div className="space-y-3">
          {[
            [
              "Always show subtitles",
              alwaysShowSubtitles,
              setAlwaysShowSubtitles,
            ],
            ["Auto-play next episode", autoPlayNext, setAutoPlayNext],
            ["Skip intro automatically", skipIntro, setSkipIntro],
          ].map(([label, state, setter]) => (
            <div
              key={label}
              className="flex items-center justify-between p-4 bg-brand-background border border-brand-border rounded-lg"
            >
              <span className="font-semibold">{label}</span>
              <Toggle
                checked={state}
                onChange={setter}
                label={label}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button className="px-6 py-3 bg-brand-background hover:bg-brand-surface rounded-lg transition font-semibold border border-brand-border">
          Reset
        </button>

        <button className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary rounded-lg font-bold transition">
          Save Preferences
        </button>
      </div>
    </section>
  );
}
