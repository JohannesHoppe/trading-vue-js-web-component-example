<template>
  <chart-wrapper :newData="data" :width="800" :height="400"></chart-wrapper>
</template>

<script>
import ChartWrapper from './components/ChartWrapper.vue';
import { data } from './data';

export default {
  name: 'App',
  components: {
    ChartWrapper
  },
  data(){
    return { data }
},
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
