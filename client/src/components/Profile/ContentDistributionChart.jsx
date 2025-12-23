import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { API_URL } from "../../api";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

function ContentDistributionChart() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [drillDownData, setDrillDownData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Drill-down data for each category
  const drillDownDetails = {
    Movies: {
      labels: ["Action Movies", "Drama Movies", "Comedy Movies", "Sci-Fi Movies"],
      data: [15, 12, 10, 8],
      backgroundColor: [
        "rgba(239, 68, 68, 0.9)",
        "rgba(239, 68, 68, 0.7)",
        "rgba(239, 68, 68, 0.5)",
        "rgba(239, 68, 68, 0.3)",
      ],
    },
    Series: {
      labels: ["Drama Series", "Crime Series", "Sci-Fi Series", "Comedy Series"],
      data: [10, 8, 7, 5],
      backgroundColor: [
        "rgba(59, 130, 246, 0.9)",
        "rgba(59, 130, 246, 0.7)",
        "rgba(59, 130, 246, 0.5)",
        "rgba(59, 130, 246, 0.3)",
      ],
    },
    Documentaries: {
      labels: ["Nature", "History", "Science", "Biography"],
      data: [5, 4, 4, 2],
      backgroundColor: [
        "rgba(34, 197, 94, 0.9)",
        "rgba(34, 197, 94, 0.7)",
        "rgba(34, 197, 94, 0.5)",
        "rgba(34, 197, 94, 0.3)",
      ],
    },
    Anime: {
      labels: ["Action Anime", "Fantasy Anime", "Romance Anime", "Sports Anime"],
      data: [4, 3, 2, 1],
      backgroundColor: [
        "rgba(168, 85, 247, 0.9)",
        "rgba(168, 85, 247, 0.7)",
        "rgba(168, 85, 247, 0.5)",
        "rgba(168, 85, 247, 0.3)",
      ],
    },
  };

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
        const response = await fetch(`${API_URL}/charts/content-distribution`);
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

  const currentData = selectedCategory && drillDownData
    ? {
        labels: drillDownData.labels,
        datasets: [
          {
            label: "Content Watched",
            data: drillDownData.data,
            backgroundColor: drillDownData.backgroundColor,
            borderColor: drillDownData.backgroundColor,
            borderWidth: 2,
          },
        ],
      }
    : {
        labels: chartData.labels,
        datasets: chartData.datasets,
      };

  const handleChartClick = (event, elements) => {
    if (elements.length > 0 && !selectedCategory) {
      const index = elements[0].index;
      const category = chartData.labels[index];
      setSelectedCategory(category);
      setDrillDownData(drillDownDetails[category]);
    }
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
    setDrillDownData(null);
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    onClick: handleChartClick,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: textColor,
          padding: 15,
          font: { size: 12 },
        },
      },
      title: {
        display: true,
        text: selectedCategory
          ? `${selectedCategory} Breakdown`
          : chartData.title,
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
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <section className="w-full">
      <div className="w-full bg-brand-surface p-6 rounded-xl">
        {selectedCategory && (
          <div className="mb-4">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 px-4 py-2 bg-brand-background text-absolutewhite rounded-lg hover:bg-opacity-80 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Overview
            </button>
          </div>
        )}
        {!selectedCategory && (
          <p className="text-textgray text-sm mb-4">
            Click on any slice to see detailed breakdown
          </p>
        )}
        <div style={{ height: "300px" }}>
          <Pie data={currentData} options={options} />
        </div>
      </div>
    </section>
  );
}

export default ContentDistributionChart;

