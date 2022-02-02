<template>
  <div>
    <h1>week</h1>
    <input type="week" v-model="week" placeholder="select" /> 
    <input type="text" v-model="text" placeholder="write" />  
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
      data: {},
      isSubmit: false,
    };
  },
  methods: {
    showMessage() {
      this.isSubmit = true;
      this.data = {week:this.week,text:this.text}
    },
  },
};
</script>