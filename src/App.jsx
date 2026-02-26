import { Routes, Route } from "react-router-dom";
import BMI from "./BMI";
import UserProfile from "./UserProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BMI />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;