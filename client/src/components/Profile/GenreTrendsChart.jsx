import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { API_URL } from "../../api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function GenreTrendsChart() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [timePeriod, setTimePeriod] = useState("week");

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

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(`${API_URL}/charts/genre-trends`);
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };
    fetchChartData();
  }, []);

  if (!chartData) {
    return null;
  }

  const currentData = chartData.datasets[timePeriod];
  const textColor = isLightMode ? "#0f172a" : "#ffffff";
  const gridColor = isLightMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)";
  const tickColor = isLightMode ? "#475569" : "#dddddd";

  const data = {
    labels: currentData.labels,
    datasets: currentData.datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { color: textColor },
      },
      title: {
        display: true,
        text: chartData.title,
        color: textColor,
        font: { size: 16 },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y} hours`;
          },
        },
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
        beginAtZero: true,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return (
    <section className="w-full">
      <div className="w-full bg-brand-surface p-6 rounded-xl">
        <div className="flex justify-end mb-4 gap-2">
          <button
            onClick={() => setTimePeriod("week")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              timePeriod === "week"
                ? "bg-brand-primary text-absolutewhite"
                : "bg-brand-background text-textgray hover:bg-opacity-80"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setTimePeriod("month")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              timePeriod === "month"
                ? "bg-brand-primary text-absolutewhite"
                : "bg-brand-background text-textgray hover:bg-opacity-80"
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setTimePeriod("year")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              timePeriod === "year"
                ? "bg-brand-primary text-absolutewhite"
                : "bg-brand-background text-textgray hover:bg-opacity-80"
            }`}
          >
            Year
          </button>
        </div>
        <div style={{ height: "300px" }}>
          <Line data={data} options={options} />
        </div>
      </div>
    </section>
  );
}

export default GenreTrendsChart;

