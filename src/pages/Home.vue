<template>
  <div>
    <span>Chart</span>
    <div>
      <highcharts v-bind:options="chart2" />
    </div>
  </div>
</template>

<script>
import Chart from './../components/HighChartDemo.vue';
export default {
  name: 'Home',
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chart2: {
        yAxis: {
          title: {
            text: 'mesure 2',
          },
        },
        series: [
          {
            data: [
              [1356998400000, 151],
              [1359676800000, 52],
              [1362096000000, 10],
              [1364774400000, 56],
              [1367366400000, 45],
              [1370044800000, 11],
              [1372636800000, 52],
              [1375315200000, 54],
              [1377993600000, 32],
              [1380585600000, 76],
              [1383264000000, 87],
              [1385856000000, 54],
              [1388534400000, 65],
              [1391212800000, 22],
              [1393632000000, 71],
              [1396310400000, 25],
              [1398902400000, 65],
              [1401580800000, 42],
              [1404172800000, 84],
              [1406851200000, 46],
              [1412121600000, 10],
              [1414800000000, 2],
              [1417392000000, 90],
              [1420070400000, 63],
              [1422748800000, 74],
            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
