<template>
  <div>
    <h1>TIME form</h1>
    <input type="time" v-model="time" placeholder="select" /> 
    <input type="url" v-model="url" placeholder="search" />  
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
      time: "",
      url: "",
      data: {},
      isSubmit: false,
    };
  },
  methods: {
    showMessage() {
      this.isSubmit = true;
      this.data = {time:this.time,url:this.url}
    },
  },
};
</script>