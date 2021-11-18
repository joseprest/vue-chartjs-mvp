import { Scatter } from 'vue-chartjs';

export default {
  extends: Scatter,
  props: {
    chartdata: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
    plugins: {
      type: Array,
      default: [],
    },
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
    this.plugins.map((plugin) => {
      this.addPlugin(plugin);
    });
  },
};
