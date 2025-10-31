import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/details/:id" element={<ActorDP />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
