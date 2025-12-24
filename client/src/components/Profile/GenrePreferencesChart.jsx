import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { API_URL } from "../../api";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

function GenrePreferencesChart() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [filter, setFilter] = useState("all");

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
        const response = await fetch(`${API_URL}/charts/genre-preferences`);
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

  const textColor = isLightMode ? "#0f172a" : "#ffffff";
  const currentData = filter === "all" ? chartData.allGenres : chartData.topGenres;

  const data = {
    labels: currentData.labels,
    datasets: [
      {
        label: "Watch Count",
        data: currentData.data,
        backgroundColor: currentData.backgroundColor,
        borderColor: currentData.backgroundColor.map(color => 
          color.replace("0.8", "1")
        ),
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: { 
          color: textColor,
          padding: 10,
          font: { size: 11 },
        },
      },
      title: {
        display: true,
        text: chartData.title,
        color: textColor,
        font: { size: 16 },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value}% (${percentage}% of total)`;
          },
        },
      },
    },
    cutout: "60%",
  };

  return (
    <section className="w-full">
      <div className="w-full bg-brand-surface p-6 rounded-xl">
        <div className="flex justify-end mb-4 gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-brand-primary text-absolutewhite"
                : "bg-brand-background text-textgray hover:bg-opacity-80"
            }`}
          >
            All Genres
          </button>
          <button
            onClick={() => setFilter("top")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "top"
                ? "bg-brand-primary text-absolutewhite"
                : "bg-brand-background text-textgray hover:bg-opacity-80"
            }`}
          >
            Top 4
          </button>
        </div>
        <div style={{ height: "300px" }}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </section>
  );
}

export default GenrePreferencesChart;

