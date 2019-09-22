<template lang="html">
  <div class="graph page">
    <app-chart></app-chart>
  </div>
</template>

<script>
import Chart from "../components/graph/Chart.vue"
export default {
  components: {
    appChart: Chart
  }
}
</script>

<style lang="scss">

  .page {
    padding: 60px 20px 20px 20px;
    height: 100%;
  }

</style>
