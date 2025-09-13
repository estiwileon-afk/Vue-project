import { defineStore } from "pinia";
import { reactive } from "vue";

export const useMovieStore = defineStore("movie", () => {
  const movies = reactive([
    { title: "Pelicula 1", duration: "1h 48min", director: "Estiwi" },
    { title: "Pelicula 2", duration: "2h 20min", director: "Max" },
    { title: "Pelicula 3", duration: "1h 30min", director: "Tom" },
  ]);

  function addMovie(pelicula) {
    movies.push(pelicula);
  }

  return {
    movies,
    addMovie,
  };
});
