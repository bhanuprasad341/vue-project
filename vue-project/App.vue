<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/form1">Form 1</router-link>
      <router-link to="/form2">Form 2 </router-link>
      <router-link to="/form3">Form 3 </router-link>
      <router-link to="/form4">Form 4</router-link>
      <router-link to="/form5">Form 5</router-link>
      <router-link to="/form6">Form 6</router-link>
      <router-link to="/form7">Form 7</router-link>
      <router-link to="/form8">Form 8</router-link>
      <router-link to="/form9">Form 9</router-link>
      <router-link to="/form10">Form 10</router-link>
      <router-link to="/task1">TASK 1</router-link>
      <router-link to="/task2">TASK 2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
