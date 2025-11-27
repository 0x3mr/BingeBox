import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Overview from './pages/Overview';
import MovieDetailPage from './pages/MovieDetailPage';
import SeriesDetailPage from './pages/SeriesDetailPage';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Subscription from './pages/Subscription';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
    </Router>
  );
}

export default App;
