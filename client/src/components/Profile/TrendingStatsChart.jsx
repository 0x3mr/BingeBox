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
  Legend
);

function TrendingStatsChart() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

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
    const fetchExternalData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch from JSONPlaceholder API as an example external API
        // This simulates fetching trending data from an external source
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=7"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch external data");
        }

        const posts = await response.json();

        // Transform the external data into chart format
        // Using post IDs and user IDs to create meaningful chart data
        const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        const viewsData = posts.map((post) => Math.floor(post.userId * 15 + Math.random() * 20));
        const likesData = posts.map((post) => Math.floor(post.id * 2 + Math.random() * 10));

        setChartData({
          title: "Trending Content Views (External API)",
          labels: labels,
          datasets: [
            {
              label: "Views",
              data: viewsData,
              backgroundColor: "rgba(59, 130, 246, 0.7)",
              borderRadius: 6,
            },
            {
              label: "Likes",
              data: likesData,
              backgroundColor: "rgba(239, 68, 68, 0.7)",
              borderRadius: 6,
            },
          ],
        });

        setLastUpdate(new Date().toLocaleTimeString());
        setLoading(false);
      } catch (err) {
        console.error("Error fetching external data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchExternalData();

    // Refresh data every 30 seconds to simulate real-time updates
    const interval = setInterval(fetchExternalData, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <section className="w-full">
        <div className="w-full bg-brand-surface p-6 rounded-xl">
          <div className="flex items-center justify-center h-[300px]">
            <div className="text-textgray">Loading external data...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full">
        <div className="w-full bg-brand-surface p-6 rounded-xl">
          <div className="flex items-center justify-center h-[300px]">
            <div className="text-red-500">Error loading data: {error}</div>
          </div>
        </div>
      </section>
    );
  }

  if (!chartData) {
    return null;
  }

  const textColor = isLightMode ? "#0f172a" : "#ffffff";
  const gridColor = isLightMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)";
  const tickColor = isLightMode ? "#475569" : "#dddddd";

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
            return `${context.dataset.label}: ${context.parsed.y}`;
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
  };

  return (
    <section className="w-full">
      <div className="w-full bg-brand-surface p-6 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-textgray text-sm">
              Live Data - Last updated: {lastUpdate}
            </span>
          </div>
          <span className="text-xs text-textgray bg-brand-background px-3 py-1 rounded-full">
            External API
          </span>
        </div>
        <div style={{ height: "300px" }}>
          <Bar data={data} options={options} />
        </div>
        <p className="text-xs text-textgray mt-2 text-center">
          Data refreshes automatically every 30 seconds
        </p>
      </div>
    </section>
  );
}

export default TrendingStatsChart;

