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
      <router-link to="/task3">TASK 3</router-link>
       <ol>
         <li v-for="(author,index) in users" :key="index">
           <label><b>Author :</b></label>{{author.author}}<br><label><b>Country :</b></label>{{author.country}}<br><label><b>ImageLink :</b></label>{{author.imageLink}}
           <label><b>Language :</b></label>{{author.language}}<br><label><b>Link :</b></label>{{author.link}}<br><label><b>Pages :</b></label>{{author.pages}}<br><label><b>Title :</b></label>{{author.title}}
           <br><label><b>Year :</b></label>{{author.year}}
         </li>
       </ol><br>
       <ol>
         <li v-for="(title,index,) in movies" :key="index">
          <div v-if="title['Major Genre']=='Drama'"> 
            <label><b>Title :</b></label>{{title.Title}}<br>
            <label><b>US Gross :</b></label>{{title["US Gross"]}}<br>
            <label><b>Worldwide Gross :</b></label>{{title["Worldwide Gross"]}}<br>
           <label><b>US DVD Sales :</b></label>{{title["US DCD Sales"]}}<br>
           <label><b>Production Budget :</b></label>{{title["Production Budget"]}}<br>
           <label><b>Release Date :</b></label>{{title["Release Date"]}}<br>
           <label><b>MPAA Rating :</b></label>{{title["MPAA Rating"]}}
           <br><label><b>Running Time min :</b></label>{{title["Running Time min"]}}<br>
           <label><b>Distributor :</b></label>{{title.Distributor}}<br>
           <label><b>Source :</b></label>{{title.Source}}<br>
           <label><b>Major Genre :</b></label>{{title["Major Genre"]}}<br>
           <label><b>Type :</b></label>{{title.Type}}<br>
           <label><b>Director :</b></label>{{title.Director}}<br>
           <label><b>Rotten Tomatoes Rating:</b></label>{{title["Rotten Tomatoes Rating"]}}<br>
           <label><b>IMDB Rating :</b></label>{{title["IMDB Rating"]}}<br>
           <label><b>IMDB Votes :</b></label>{{title["IMDB Votes"]}}
           </div>
         </li>
       </ol>
    </div>
    <router-view/>
  </div>
</template>

<script>
import usersData from "./users.json";
import moviedata from "./movies.json";

export default {
  data() {
    return {
      users: usersData,
      movies: moviedata,

    };
  },
};
</script>

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
