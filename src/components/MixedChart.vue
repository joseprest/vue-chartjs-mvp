<template>
  <div class="local-chart">
    <scatter-chart
      :chartdata="chartdata"
      :options="options"
      :plugins="plugin"
    ></scatter-chart>
  </div>
</template>

<script>
import ScatterChart from './charts/ScatterChart';
import { VerticalLinePlugin } from './charts/VerticalLinePlugin';

export default {
  components: {
    ScatterChart,
  },
  data() {
    return {
      chartdata: {
        datasets: [
          {
            label: 'Scatter Dataset',
            data: [
              { x: 3, y: 99 },
              { x: 5, y: 23 },
              { x: 7, y: 11 },
              { x: 8, y: 40 },
              { x: 9, y: 5 },
              { x: 11, y: 39 },
              { x: 15, y: 28 },
              { x: 18, y: 59 },
              { x: 20, y: 34 },
              { x: 21, y: 77 },
              { x: 22, y: 15 },
              { x: 25, y: 25 },
              { x: 32, y: 19 },
              { x: 35, y: 49 },
              { x: 39, y: 84 },
              { x: 40, y: 93 },
              { x: 42, y: 17 },
              { x: 43, y: 55 },
              { x: 44, y: 76 },
              { x: 54, y: 33 },
              { x: 57, y: 99 },
              { x: 59, y: 33 },
              { x: 61, y: 89 },
              { x: 62, y: 24 },
              { x: 65, y: 70 },
              { x: 74, y: 86 },
              { x: 75, y: 79 },
              { x: 76, y: 32 },
              { x: 79, y: 54 },
              { x: 80, y: 42 },
              { x: 82, y: 52 },
              { x: 85, y: 25 },
              { x: 86, y: 14 },
              { x: 87, y: 27 },
              { x: 88, y: 50 },
              { x: 91, y: 1 },
              { x: 92, y: 51 },
              { x: 93, y: 44 },
              { x: 96, y: 65 },
              { x: 98, y: 77 },
            ],
            showLine: true,
            tension: 0.1,
            backgroundColor: 'rgb(255, 99, 132)',
            fill: false,
          },
          {
            label: 'Scatter Dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            data: [
              { x: 4, y: 100 },
              { x: 10, y: 100 },
              { x: 11, y: 100 },
              { x: 14, y: 100 },
              { x: 15, y: 100 },
              { x: 16, y: 100 },
              { x: 19, y: 100 },
              { x: 22, y: 100 },
              { x: 26, y: 100 },
              { x: 29, y: 100 },
              { x: 32, y: 100 },
              { x: 33, y: 100 },
              { x: 35, y: 100 },
              { x: 37, y: 100 },
              { x: 38, y: 100 },
              { x: 39, y: 100 },
              { x: 40, y: 100 },
              { x: 43, y: 100 },
              { x: 44, y: 100 },
              { x: 47, y: 100 },
              { x: 49, y: 100 },
              { x: 59, y: 100 },
              { x: 60, y: 100 },
              { x: 61, y: 100 },
              { x: 62, y: 100 },
              { x: 64, y: 100 },
              { x: 65, y: 100 },
              { x: 66, y: 100 },
              { x: 67, y: 100 },
              { x: 68, y: 100 },
              { x: 73, y: 100 },
              { x: 75, y: 100 },
              { x: 77, y: 100 },
              { x: 78, y: 100 },
              { x: 79, y: 100 },
              { x: 80, y: 100 },
              { x: 94, y: 100 },
              { x: 97, y: 100 },
              { x: 98, y: 100 },
              { x: 100, y: 100 },
            ],
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
        },
        aspectRatio: false,
        events: ['mousemove'],
        interaction: {
          intersect: false,
        },
        tooltip: {
          events: ['mousemove'],
        },
      },
      plugin: [VerticalLinePlugin],
      tooltipOption: {},
    };
  },

  name: 'MixedChart',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.local-chart {
}
</style>
