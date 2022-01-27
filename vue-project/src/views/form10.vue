<template>
  <div>
    <h1>HTML INPUT ELEMENTS</h1>
    <input type="text" v-model="name" placeholder="name" /> 
    <input type="email" v-model="email" placeholder="email" /> 
    <input type="checkbox" v-model="checkbox" placeholder="name" /> 
    <input type="date" v-model="date" placeholder="date" /> 
    <input type="number" v-model="number" placeholder="choose number" /> 
    <input type="image" v-model="image" placeholder="select image" /> 
    <input type="password" v-model="password" placeholder="create a pawwsd" /> 
    <input type="radio" v-model="radio" placeholder="select" /> 
    <input type="range" v-model="range" placeholder="select range" /> 
    <input type="reset" v-model="reset" placeholder="erase" />
    <input type="time" v-model="time" placeholder="select" /> 
    <input type="url" v-model="url" placeholder="search" /> 
    <input type="color" v-model="color" placeholder="select" /> 
    <input type="button" v-model="button" placeholder="search" />
    <input type="month" v-model="color" placeholder="select" /> 
    <input type="hidden" v-model="hidden" placeholder="search" />
    <input type="week" v-model="week" placeholder="select" />  
    <button @click="showMessage">Submit</button>
    <div v-if="isSubmit">
      {{ this.data }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      week: "",
      text: "",
      email: "",
      checkbox:"",
      date:"",
      number:"",
      image:"",
      password:"",
      radio:"",
      range:"",
      reset:"",
      time:"",
      url:"",
      color:"",
      button:"",
      month:"",
      hidden:"",
      data: {},
      isSubmit: false,
    };
  },
  methods: {
    showMessage() {
      this.isSubmit = true;
      this.data = {week:this.week,text:this.text,email:this.email,checkbox:this.checkbox,date:this.date,number:this.number,
          image:this.image,password:this.password,radio:this.radio,range:this.range,reset:this.reset,time:this.time,
          url:this.url,color:this.color,button:this.button,month:this.month,hidden:this.hidden}
    },
  },
};
</script>