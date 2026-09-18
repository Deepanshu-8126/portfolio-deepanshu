import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

// ScrollToTop component to reset scroll on route transition
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
const Play = lazy(() => import("./pages/Play"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const HackathonDetail = lazy(() => import("./pages/HackathonDetail"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <LoadingProvider>
              <Suspense fallback={<div>Loading...</div>}>
                <MainContainer />
              </Suspense>
            </LoadingProvider>
          }
        />
        <Route
          path="/myworks"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MyWorks />
            </Suspense>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectDetail />
            </Suspense>
          }
        />
        <Route
          path="/hackathons/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HackathonDetail />
            </Suspense>
          }
        />
        <Route
          path="/play"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Play />
            </Suspense>
          }
        />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;
