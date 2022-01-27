<template>
  <div>
    <h1>documents form</h1>
    <input type="number" v-model="number" placeholder="choose number" /> 
    <input type="image" v-model="image" placeholder="select image" />  
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
      number: "",
      image: "",
      data: {},
      isSubmit: false,
    };
  },
  methods: {
    showMessage() {
      this.isSubmit = true;
      this.data = {number:this.number,image:this.image}
    },
  },
};
</script>