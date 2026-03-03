import { HashRouter, Routes, Route } from "react-router-dom";
import BMI from "./BMI";
import UserProfile from "./UserProfile";
import WeightGainPlan from "./WeightGainPlan"; 
import WeightLossPlan from "./WeightLossPlan"; 
import EndurancePlan from "./EndurancePlan";
import MuscleBuildingPlan from "./MuscleBuildingPlan"; // Final Import

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BMI />} />
        <Route path="/profile" element={<UserProfile />} />
        
        {/* Full suite of Fitness Protocols */}
        <Route path="/weight-gain-plan" element={<WeightGainPlan />} />
        <Route path="/weight-loss-plan" element={<WeightLossPlan />} />
        <Route path="/endurance-plan" element={<EndurancePlan />} />
        <Route path="/muscle-building-plan" element={<MuscleBuildingPlan />} />
      </Routes>
    </HashRouter>
  );
}

export default App;