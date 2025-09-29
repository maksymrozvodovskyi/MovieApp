# Movie Explorer

## Project Overview

Movie Explorer is a web application for browsing and managing movies. Users can:

- View a list of movies with posters, genres, and release year.
- Add movies to favorites and remove them.
- Search and filter movies by title.

Favorite movies are stored in local storage, allowing them to persist between sessions. The application is fully responsive and works well on both desktop and mobile devices.

The project uses React for building the user interface, React Router for client-side routing, CSS Modules for component-level styling, and modern JavaScript (ES6+) for logic and data handling. Custom hooks are used to manage state and local storage.

---

## Technologies Used

- **React** – for building the user interface
- **React Router** – for client-side routing
- **CSS Modules** – for scoped component styling
- **JavaScript (ES6+)** – for application logic
- **Custom Hooks** – for state management and local storage handling

---

## Getting Started

Install dependencies using `npm install`, then run the development server with `npm start`.
The application will open in your browser at [http://localhost:3000](http://localhost:3000).
To build the project for production, use `npm run build`, this will create a `build` folder containing a production-ready version of the app.

---

## Usage

Browse movies on the home page. Click the **Favorite** button to add a movie to your favorites list or remove it.
Use the search bar to find movies by title. Favorites are stored in local storage and persist across sessions.

---

## Project Structure

- /src
- /components - Reusable components (MovieCard, MovieList, FavoriteBtn)
- /hooks - Custom hooks (useFavorites, useMovies)
- /utils - Utility functions (getPosterUrl, getGenres, getYear)
- /pages - Page components (Home, Favorites)
- App.js - Main application component
- index.js - Entry point

---

## Contact

For questions or suggestions, contact: <rozvodovskyim@gmail.com>
