<template>
  <div>
    <h1>color</h1>
    <input type="month" v-model="color" placeholder="select" /> 
    <input type="hidden" v-model="hidden" placeholder="search" />  
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
      month: "",
      hidden: "",
      data: {},
      isSubmit: false,
    };
  },
  methods: {
    showMessage() {
      this.isSubmit = true;
      this.data = {month:this.month,hidden:this.hidden}
    },
  },
};
</script>