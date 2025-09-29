# Movie Explorer

## Project Overview

Movie Explorer is a React-based web application that allows users to explore and search for movies. It uses TheMovieDB API to fetch real-time movie data, such as titles, posters, genres, and release years. Users can browse popular movies, search by title, view movie details, and manage a list of favorite movies.

Favorite movies are stored in local storage, so they persist between sessions. The application is fully responsive and works well on desktops, tablets, and mobile devices.

## Features

- Browse popular and trending movies.
- Search for movies by title.
- View detailed movie information (release date, genres, rating, overview).
- Add and remove movies from your favorites list.
- Responsive design for all devices.

## Live Demo

You can view the live application here:  
[https://movie-jut0e7t7h-komorys-projects.vercel.app/](https://movie-jut0e7t7h-komorys-projects.vercel.app/)

## Project Structure

- /src
- /components - Reusable components (MovieCard, MovieList, FavoriteBtn)
- /hooks - Custom hooks (useFavorites, useMovies)
- /utils - Utility functions (getPosterUrl, getGenres, getYear)
- /pages - Page components (Home, Favorites)
- App.js - Main application component
- index.js - Entry point

## Technologies Used

- React.js
- React Router
- CSS Modules
- JavaScript (ES6+)
- Custom Hooks

## License

This project is licensed under the MIT License.

## Contact

For questions or suggestions, contact: <rozvodovskyim@gmail.com>
