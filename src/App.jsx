import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import Favorites from "./components/Favorites";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import { useFavorites } from "./context/FavoriteContext";

function App() {
  // load existing favorites from the cache
  const [favorites, setFavorites] = useFavorites();

  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/favs" element={<Favorites />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
