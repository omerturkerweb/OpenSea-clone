import { NavLink, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Home from "./components/Home";
import Explore from "./components/Explore";
import "./css/App.scss";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<Home />}></Route>
          <Route path="/explore-collections" element={<Explore />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
