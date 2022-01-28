<template>
 <div>
   <Header />
  <router-view></router-view>
 </div>
</template>

<script setup>
import Header from './components/Header.vue'

</script>

<style lang="scss">
#app {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #43b781;
}
html, body {
  margin: 0;
  background: #43b781;
}

</style>
