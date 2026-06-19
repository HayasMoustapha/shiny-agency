import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Survey from "./pages/Survey.jsx";
import Results from "./pages/Results.jsx";
import Freelances from "./pages/Freelances.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:id" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
