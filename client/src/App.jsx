import { Routes, Route, useParams } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import LoadingComponent from '../src/components/Other/Loading.jsx'
import './App.css'

const Home = lazy(() => import('../src/routes/Home/Home.jsx'))
const Auth = lazy(() => import('../src/routes/Auth/Auth.jsx'))
const Overview = lazy(() => import('../src/routes/Overview/Overview.jsx'))
const Profile = lazy(() => import('../src/routes/Profile/Profile.jsx'))
const Settings = lazy(() => import('../src/routes/Settings/Settings.jsx'))
const NotFound = lazy(() => import('../src/routes/Other/NotFound.jsx'))
// const ActorDP = lazy(() => import('../src/routes/DetailPage/ActorDP.jsx'))
// const MovieDP = lazy(() => import('../src/routes/DetailPage/MovieDP.jsx'))


const DetailsRouter = () => {
  const { id } = useParams();

  // TODO: set up a details router for ActorDP.jsx & MovieDP.jsx
  return (<div>Sample test</div>);''
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
