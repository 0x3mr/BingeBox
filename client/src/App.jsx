import { Routes, Route, useParams, useSearchParams } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import LoadingComponent from './components/Other/Loading.jsx'
import './App.css'

const Home = lazy(() => import('./routes/Home/Home.jsx'))
const Auth = lazy(() => import('./routes/Auth/Auth.jsx'))
const Overview = lazy(() => import('./routes/Overview/Overview.jsx'))
const Profile = lazy(() => import('./routes/Profile/Profile.jsx'))
const Settings = lazy(() => import('./routes/Settings/Settings.jsx'))
const NotFound = lazy(() => import('./routes/Other/NotFound.jsx'))
const ActorDP = lazy(() => import('./routes/DetailPage/ActorDP.jsx'))
const MovieDP = lazy(() => import('./routes/DetailPage/MovieDP.jsx'))


const DetailsRouter = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  // Route to ActorDP or MovieDP based on type query parameter
  if (type === 'actor') {
    return <ActorDP />;
  } else if (type === 'movie') {
    return <MovieDP />;
  } else {
    // Default to MovieDP if no type specified, or show error
    return <MovieDP />;
  }
};

function App() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/details/:id" element={<DetailsRouter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
