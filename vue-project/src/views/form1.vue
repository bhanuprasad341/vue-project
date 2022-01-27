<template>
  <div>
    <h1>Personal details</h1>
    <input type="text" v-model="name" placeholder="name" /> 
    <input type="email" v-model="email" placeholder="email" />  
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
      name: "",
      email: "",
      data: {},
      isSubmit: false,
    };
  },
  methods: {
    showMessage() {
      this.isSubmit = true;
      this.data = {name:this.name,email:this.email}
    },
  },
};
</script>