<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import { useMovieStore } from "../stores/movie-store";

const movieStore = useMovieStore()

</script>

<template>
  <HeaderComponent></HeaderComponent>
  <h1>Pagina de Blog</h1>

  <div>
    <ul>
        <li v-for="movie in movieStore.movies" :key="movie.title">
            <p>{{ movie.title }}</p>
            <p>{{ movie.duration }}</p>
            <p>{{ movie.director }}</p>
        </li>
    </ul>
  </div>
</template>

<style scoped></style>
