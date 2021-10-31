import * as echart from "echarts";
import chinaMap from "../data/china.json";

echart.registerMap("china", chinaMap);
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
