<template>
  <div>
    <h1>Passwd form</h1>
    <input type="password" v-model="password" placeholder="create a pawwsd" /> 
    <input type="radio" v-model="radio" placeholder="select" />  
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
      password: "",
      radio: "",
      data: {},
      isSubmit: false,
    };
  },
  methods: {
    showMessage() {
      this.isSubmit = true;
      this.data = {password:this.password,radio:this.radio}
    },
  },
};
</script>