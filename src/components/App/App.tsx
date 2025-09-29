import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { MoviePage } from "../../pages/MoviePage/MoviePage";
import { Favorites } from "../../pages/FavoritePage/FavoritePage";
import { Header } from "../Header/Header";
import { GenreProvider } from "../../context/genreContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <GenreProvider>
      <Header />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </GenreProvider>
  );
};

export default App;
