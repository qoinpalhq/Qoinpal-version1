import { Routes, Route, useLocation } from "react-router-dom";
import WaitlistRegistration from "./pages/WaitlistRegistration/WaitlistRegistration";
import JoinTeamRegistration from "./pages/JoinTeamRegistration/JoinTeamRegistration";
import Home from "./pages/Home/Home";
import Congrats from "./pages/Congrats/Congrats";
import More from "./pages/LearnMore/LearnMore";
import JoinCause from "./pages/JoinCause/JoinCause";
import Sidebar from "./components/Sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Sidebar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />

        <Route path="more" element={<More />} />
        <Route path="congrats" element={<Congrats />} />
        <Route path="cause" element={<JoinCause />} />

        <Route path="registration">
          <Route path="waitlist" element={<WaitlistRegistration />} />
          <Route path="team" element={<JoinTeamRegistration />} />
        </Route>
        <Route path="*" element={Error} />
      </Routes>
    </AnimatePresence>
  );
}
