import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { MoviePage } from "../../pages/MoviePage/MoviePage";
import { Favorites } from "../../pages/FavoritePage/FavoritePage";
import { Header } from "../Header/Header";
import { GenreProvider } from "../../context/genreContext";
import { Toaster } from "react-hot-toast";
import { NotFound } from "../../pages/NotFound/NotFound";

const App = () => {
  return (
    <GenreProvider>
      <Header />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </GenreProvider>
  );
};

export default App;
