<template>
  <div>
    <bar-chart> </bar-chart>
    <call-api> </call-api>
  </div>
</template>

<script>
import BarChart from "./charts/BarChart";
import CallApi from "./charts/CallApi"

export default {
  components: { BarChart,CallApi }, 
};
</script>

<style scoped>
</style>
