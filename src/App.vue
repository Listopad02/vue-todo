<template>
  <div id="app">
    <h1>Todo application</h1>
    <div class="links">
      <router-link to="/active">Active</router-link>
      <router-link to="/completed">Completed</router-link>
      <router-link to="/">All</router-link>
    </div>
    <hr>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a:not(:first-child) {
  margin-left: 20px;
}
a {
  cursor: pointer;
  color: #2c3e50;
  text-decoration: none;
}
</style>