<template>
  <div>
    <h1>reset form</h1>
    <input type="range" v-model="range" placeholder="select range" /> 
    <input type="reset" v-model="reset" placeholder="erase" />  
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
      range: "",
      reset: "",
      data: {},
      isSubmit: false,
    };
  },
  methods: {
    showMessage() {
      this.isSubmit = true;
      this.data = {range:this.range,reset:this.reset}
    },
  },
};
</script>