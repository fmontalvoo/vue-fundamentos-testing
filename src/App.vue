<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Counter />
  <Counter :count="10" :exp="3" />
  <Counter :count="100" :exp="4" />
  <Counter :count="1000" :exp="5" />
</template>

<script>
import Counter from './components/Counter.vue';

export default {
  name: 'App',
  components: {
    Counter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
