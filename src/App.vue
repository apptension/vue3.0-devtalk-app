<template>
  <nav>
    <router-link to="/lesson-01">Lesson 01</router-link> |
    <router-link to="/lesson-02">Lesson 02</router-link> |
    <router-link to="/lesson-03">Lesson 03</router-link> |
    <router-link to="/lesson-04">Lesson 04</router-link> |
    <router-link to="/lesson-05">Lesson 05</router-link> |
    <router-link to="/lesson-06">Lesson 06</router-link> |
    <router-link to="/lesson-07">Lesson 07</router-link> |
    <router-link to="/lesson-08">Lesson 08</router-link> |
    <router-link to="/lesson-09">Lesson 09</router-link>
  </nav>
  <router-view />
</template>

<style>
section {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #c1fae0;
  width: 800px;
  margin: auto;
  padding: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
