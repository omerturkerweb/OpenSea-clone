import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/Home/HomeLayout";
import Home from "./components/Home/Home";
import "./css/App.scss";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
