import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import Favorites from "./components/Favorites";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
