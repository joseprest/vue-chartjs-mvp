import { EventBus } from './event-bus.js';

export function syncCharts(H) {
  H.addEvent(H.Chart, 'load', function (e) {
    var chart = e.target;

    H.addEvent(chart.xAxis[0], 'afterSetExtremes', function (e) {
      EventBus.$emit('extremes-changed', {
        min: e.min,
        max: e.max,
        chartId: chart.index,
      });
    });
  });
}
