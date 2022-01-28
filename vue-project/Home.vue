<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hello-1 msg="Welcome to Your Vue.js App"/>
    <form1 msg="Patient Information 1"/>
    <form2 msg="Patient Information 2"/>
    <form3 msg="Patient Information 3"/>
    <form4 msg="Patient Information 4"/>
    <form5 msg="Patient Information 5"/>
    <task2 msg="TABLE"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import hello1 from '@/components/hello1.vue'
import form1 from '@/views/form1.vue'
import form2 from '@/views/form2.vue'
import form3 from '@/views/form3.vue'
import form4 from '@/views/form4.vue'
import form5 from '@/views/form5.vue'
import task2 from '@/views/task2.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    hello1,
    form1,
    form2,
    form3,
    form4,
    form5,
    task2
  }
}
</script>
