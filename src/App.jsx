import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import WaitlistRegistration from "./pages/WaitlistRegistration/WaitlistRegistration";
import JoinTeamRegistration from "./pages/JoinTeamRegistration/JoinTeamRegistration";
import Congrats from "./pages/Congrats/Congrats";
export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="congrats" element={<Congrats />} />
      <Route path="registration">
        <Route path="waitlist" element={<WaitlistRegistration />} />
        <Route path="team" element={<JoinTeamRegistration />} />
      </Route>
      <Route path="*" element={Error} />
    </Routes>
  );
}
