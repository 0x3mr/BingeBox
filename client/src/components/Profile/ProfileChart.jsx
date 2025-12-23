import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function ProfileChart() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.documentElement.classList.contains("light"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const textColor = isLightMode ? "#0f172a" : "#ffffff";
  const gridColor = isLightMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)";
  const tickColor = isLightMode ? "#475569" : "#dddddd";

  const data = {
    labels,
    datasets: [
      {
        label: "Hours Watched",
        data: [2, 1.5, 3, 2.5, 4, 5, 3.5], // <-- sample data
        backgroundColor: "rgba(59, 130, 246, 0.7)", // Tailwind blue-500
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: { color: textColor },
      },
      title: {
        display: true,
        text: "Hours Watched per Day",
        color: textColor,
      },
    },
    scales: {
      x: {
        ticks: { color: tickColor },
        grid: { color: gridColor },
      },
      y: {
        ticks: { color: tickColor },
        grid: { color: gridColor },
      },
    },
  };

  return (
    <section className="w-full flex flex-col items-center gap-8 py-8 text-brand-primary">
      <div className="w-full max-w-3xl bg-brand-surface p-4 rounded-xl">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}

export default ProfileChart;
