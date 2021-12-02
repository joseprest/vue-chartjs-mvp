<template>
  <div>
    <highcharts
      :options="chartOptions"
      ref="lineCharts"
      :constructor-type="'stockChart'"
    ></highcharts>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue';
import Highcharts from 'highcharts';
import stockInit from 'highcharts/modules/stock';
import { EventBus } from './../event-bus.js';
import { syncCharts } from './../sync-charts.js';

stockInit(Highcharts);
syncCharts(Highcharts);

export default {
  props: ['options', 'catchLegendEvents'],
  components: {
    highcharts: Chart,
  },

  created() {
    EventBus.$on('extremes-changed', (props) => {
      Highcharts.charts.forEach((chart) => {
        if (chart && chart.index !== props.chartId) {
          chart.xAxis[0].setExtremes(props.min, props.max);
        }
      });
    });
  },

  data() {
    return {
      chartOptions: Highcharts.merge(this.options, {
        chart: {
          zoomType: 'x',
          type: 'line',
          height: 250,
        },
        xAxis: {
          type: 'datetime',
        },
      }),
    };
  },
};
</script>
