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
import { API_URL } from "../../api";

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
        const response = await fetch(`${API_URL}/charts/profile-hours-watched`);
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

  const labels = chartData.labels;
  const textColor = isLightMode ? "#0f172a" : "#ffffff";
  const gridColor = isLightMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)";
  const tickColor = isLightMode ? "#475569" : "#dddddd";

  const data = {
    labels,
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
  };

  return (
    <section className="w-full">
      <div className="w-full bg-brand-surface p-6 rounded-xl">
        <div style={{ height: "300px" }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </section>
  );
}

export default ProfileChart;
