import * as echart from "echarts";

export default function useEchart(el: HTMLElement) {
  const echartInstance = echart.init(el);
  const setOptions = (options: echart.EChartsOption) => {
    echartInstance.setOption(options);
  };
  window.addEventListener("resize", () => {
    echartInstance.resize();
  });
  const changeEchartSize = () => {
    echartInstance.resize();
  };

  return {
    echartInstance,
    setOptions,
    changeEchartSize
  };
}
