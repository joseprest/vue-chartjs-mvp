export const verticalLinePlugin = {
  afterEvent(chartInstance, args, pluginOptions) {
    const events = args.events;
    console.log(args, pluginOptions, events);

    const {
      config: { data },
      ctx,
      chartArea: area,
      scales,
    } = chartInstance;

    const point = data.datasets[0].data[0];

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
