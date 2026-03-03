import { HashRouter, Routes, Route } from "react-router-dom";
import BMI from "./BMI";
import UserProfile from "./UserProfile";
import WeightGainPlan from "./WeightGainPlan"; // Import the new component

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BMI />} />
        <Route path="/profile" element={<UserProfile />} />
        {/* Dynamic Route for the Weight Gain Details */}
        <Route path="/weight-gain-plan" element={<WeightGainPlan />} />
      </Routes>
    </HashRouter>
  );
}

export default App;