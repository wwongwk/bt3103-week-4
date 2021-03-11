<template>
  <div class="chart">

    {{ datacollection }}

    <h1>Load data from Firebase</h1>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "../../firebase.js";
export default {
  components: {
    Chart
  }
};
</script>

<style>
</style>
