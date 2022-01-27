<template>
  <div class="list">
    <h1>select form</h1>
    <input type="checkbox" v-model="checkbox" placeholder="name" /> 
    <input type="date" v-model="date" placeholder="date" />  
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
      this.data = {checkbox:this.checkbox,date:this.date}
    },
  },
};
</script>