import { HashRouter, Routes, Route } from "react-router-dom";
import BMI from "./BMI";
import UserProfile from "./UserProfile";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BMI />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </HashRouter>
  );
}

export default App;