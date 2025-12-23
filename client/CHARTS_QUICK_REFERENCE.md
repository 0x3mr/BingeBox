# Charts Quick Reference Guide

## 📊 Charts Overview

| # | Chart Name | Type | Interactive | API Source | File |
|---|------------|------|-------------|------------|------|
| 1 | Hours Watched per Day | Bar | ❌ | Local JSON | `ProfileChart.jsx` |
| 2 | Genre Watch Trends | Line | ✅ Time Period | Local JSON | `GenreTrendsChart.jsx` |
| 3 | Content Distribution | Pie | ✅ Drill-Down | Local JSON | `ContentDistributionChart.jsx` |
| 4 | Genre Preferences | Donut | ✅ Filtering | Local JSON | `GenrePreferencesChart.jsx` |
| 5 | Weekly Activity | Radar | ❌ | Local JSON | `WeeklyActivityChart.jsx` |
| 6 | Trending Stats | Bar | ✅ Real-Time | **External API** | `TrendingStatsChart.jsx` |

## 🎯 Interactive Features

### 1. Time Period Switching (Genre Trends)
```jsx
// User can switch between:
- Week view (7 days)
- Month view (4 weeks)
- Year view (12 months)
```

### 2. Drill-Down (Content Distribution)
```jsx
// Click on any slice to see breakdown:
Movies → Action, Drama, Comedy, Sci-Fi Movies
Series → Drama, Crime, Sci-Fi, Comedy Series
Documentaries → Nature, History, Science, Biography
Anime → Action, Fantasy, Romance, Sports Anime
```

### 3. Genre Filtering (Genre Preferences)
```jsx
// Toggle between:
- All Genres (8 items)
- Top 4 (4 items)
```

### 4. Real-Time Updates (Trending Stats)
```jsx
// Features:
- Auto-refresh every 30 seconds
- Live data indicator (animated green dot)
- Last update timestamp
- External API integration
```

## 🌐 API Integration

### Local JSON Server
```bash
# All chart data stored in:
client/server/database.json

# Charts array contains:
- profile-hours-watched
- genre-trends
- content-distribution
- genre-preferences
- weekly-activity
```

### External API
```javascript
// TrendingStatsChart.jsx
const API = "https://jsonplaceholder.typicode.com/posts?_limit=7";
// Transforms external post data into chart visualization
```

## 🎨 Chart Customization

### Theme Support
```javascript
// All charts detect and adapt to theme changes:
const textColor = isLightMode ? "#0f172a" : "#ffffff";
const gridColor = isLightMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)";
```

### Color Palettes
```javascript
// Consistent colors across charts:
Red: "rgba(239, 68, 68, 0.8)"     // Action
Blue: "rgba(59, 130, 246, 0.8)"   // Drama
Green: "rgba(34, 197, 94, 0.8)"   // Comedy
Purple: "rgba(168, 85, 247, 0.8)" // Sci-Fi
```

## 📱 Responsive Layout

```jsx
// Desktop (lg):
┌─────────────────────────┐
│   Bar Chart (Hours)     │
├─────────────────────────┤
│   Line Chart (Trends)   │
├───────────┬─────────────┤
│ Pie Chart │ Donut Chart │
├─────────────────────────┤
│   Radar Chart           │
├─────────────────────────┤
│   External API Chart    │
└─────────────────────────┘

// Mobile:
Each chart stacks vertically
```

## 🔧 How to Add New Charts

1. **Add data to database.json:**
```json
{
  "id": "new-chart-id",
  "type": "bar|line|pie|doughnut|radar",
  "title": "Chart Title",
  "labels": [...],
  "datasets": [...]
}
```

2. **Create component:**
```jsx
// client/src/components/Profile/NewChart.jsx
import { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import { API_URL } from "../../api";

function NewChart() {
  // Fetch from API_URL/charts/new-chart-id
  // Implement chart logic
}
```

3. **Add to Profile page:**
```jsx
// client/src/routes/Profile.jsx
import NewChart from "../components/Profile/NewChart";

// Add in Analytics Dashboard section:
<NewChart />
```

## 🐛 Debugging

### Check Chart Rendering
```bash
# Console logs are added for API fetch errors:
console.error("Error fetching chart data:", error);
```

### Verify API Responses
```bash
# Test JSON server endpoints:
curl http://localhost:4000/charts/profile-hours-watched
curl http://localhost:4000/charts/genre-trends
# etc.
```

### Theme Issues
```javascript
// Check if theme observer is working:
document.documentElement.classList.contains("light")
```

## 📦 Required Packages

All already installed in project:
```json
{
  "react-chartjs-2": "^5.x.x",
  "chart.js": "^4.x.x"
}
```

## 🚀 Performance Tips

- Charts register only required Chart.js components
- Data fetching happens once on mount (except external API)
- Theme detection uses MutationObserver (efficient)
- Responsive sizing uses CSS (maintainAspectRatio: false)

## 📝 Chart Types Available

Using Chart.js, you can create:
- ✅ **Bar** - Vertical/horizontal bars
- ✅ **Line** - Line with/without fill
- ✅ **Pie** - Circular slices
- ✅ **Doughnut** - Pie with center cutout
- ✅ **Radar** - Spider/web chart
- ⚪ Scatter - Points on XY axes
- ⚪ Bubble - Sized points
- ⚪ PolarArea - Pie-like with radial axis
- ⚪ Mixed - Combine multiple types

## 🎓 Learning Resources

- [Chart.js Docs](https://www.chartjs.org/docs/latest/)
- [React-ChartJS-2 Docs](https://react-chartjs-2.js.org/)
- [Chart.js Examples](https://www.chartjs.org/docs/latest/samples/information.html)

