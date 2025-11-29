import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Auth from "./routes/Auth";
import Overview from "./routes/Overview";
import MovieDetailPage from "./routes/MovieDetailPage";
import SeriesDetailPage from "./routes/SeriesDetailPage";
import Profile from "./routes/Profile";
import Settings from "./routes/Settings";
import Subscription from "./routes/Subscription";
import Support from "./routes/Support";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/movie" element={<MovieDetailPage />} />
        <Route path="/movie-detail" element={<MovieDetailPage />} />
        <Route path="/series/:id" element={<SeriesDetailPage />} />
        <Route path="/series" element={<SeriesDetailPage />} />
        <Route path="/series-detail" element={<SeriesDetailPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
