export const VerticalLinePlugin = {
  afterEvent(chartInstance, args) {
    // const event = args.event;
    console.log(args.chart.active);
    if (args.chart.active.length > 0) {
      const { _datasetIndex: datasetIndex, _index: index } =
        args.chart.active[0];
      if (datasetIndex == 1) {
        this.drawLine(chartInstance, datasetIndex, index);
      }
    }
  },
  drawLine(chartInstance, datasetIndex, index) {
    const {
      config: { data },
      ctx,
      chartArea: area,
      scales,
    } = chartInstance;

    const point = data.datasets[datasetIndex].data[index];

    // draw line

    const screenWidth = area.right - area.left;
    const screenHeight = area.bottom - area.top;

    const posX =
      (point.x / (scales['x-axis-1'].max - scales['x-axis-1'].min)) *
        screenWidth +
      area.left;
    const startPosY =
      (point.y / (scales['y-axis-1'].max - scales['y-axis-1'].min)) *
        screenHeight +
      area.top;

    const endPosY = area.top;
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(posX, startPosY);
    ctx.strokeStyle = '#ff0000';
    ctx.lineTo(posX, endPosY);
    ctx.stroke();
    ctx.restore();
  },
};
