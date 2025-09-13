<script setup></script>

<template>
  <header class="header">
    <h1>Logo</h1>
    <nav>
      <ul class="nav-list">
        <li><router-link class="link" to="/Contact">Contact</router-link></li>
        <li><router-link class="link" to="/Blog">Blog</router-link></li>
        <li><router-link class="link" to="/">Home</router-link></li>
      </ul>
    </nav>
  </header>
</template>
 
<style scoped>
.header{
    width: 100%;
    background-color: rgb(74, 63, 151);
    color: white;
    text-align: center;
    padding: 1.2rem;
    .nav-list{
        display: flex;
        justify-content: space-around;
        .link{
            color: white;
            text-decoration: none;
        }
    }
}
</style>
