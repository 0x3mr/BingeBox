import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { API_URL } from "../../api";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

function WeeklyActivityChart() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [chartData, setChartData] = useState(null);

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
        const response = await fetch(`${API_URL}/charts/weekly-activity`);
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
  const gridColor = isLightMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)";

  const data = {
    labels: chartData.labels,
    datasets: chartData.datasets,
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
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.r} hours`;
          },
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: gridColor,
        },
        grid: {
          color: gridColor,
        },
        pointLabels: {
          color: textColor,
          font: { size: 12 },
        },
        ticks: {
          color: textColor,
          backdropColor: "transparent",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="w-full">
      <div className="w-full bg-brand-surface p-6 rounded-xl">
        <div style={{ height: "350px" }}>
          <Radar data={data} options={options} />
        </div>
      </div>
    </section>
  );
}

export default WeeklyActivityChart;

