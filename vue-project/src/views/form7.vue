<template>
  <div>
    <h1>color</h1>
    <input type="color" v-model="color" placeholder="select" /> 
    <input type="button" v-model="button" placeholder="search" />  
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
      color: "",
      button: "",
      data: {},
      isSubmit: false,
    };
  },
  methods: {
    showMessage() {
      this.isSubmit = true;
      this.data = {color:this.color,button:this.button}
    },
  },
};
</script>