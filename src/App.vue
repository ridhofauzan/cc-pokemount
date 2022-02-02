<template>
 <div>
   <Header />
  <!-- <router-view></router-view> -->
  <div v-if="error">{{ error }}</div>
    <Suspense>
      <template #default>
        <ItemList />
      </template>
      <template #fallback>
        <div>Loading your amazing vuesers...</div>
      </template>
    </Suspense>
 </div>
</template>

<script>
import Header from './components/Header.vue'
import ItemList from "./components/ItemList.vue";
// import SecondaryUsage from "./components/SecondaryUsage.vue";
import { ref, onErrorCaptured } from "vue";

export default {
  name: "App",
  setup() {
    const error = ref(null);
    onErrorCaptured(e => {
      error.value = e;
    });
    return { error };
  },
  components: {
    ItemList,
    Header
    // SecondaryUsage
  }
};
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
