<template>
  <div class="dashboard">
    <div class="eChartRef" style="width: 600px; height: 600px"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import * as eChart from "echarts";

export default defineComponent({
  name: "dashboard",
  setup() {
    const eChartRef = ref<HTMLElement>();
    onMounted(() => {
      const eChartInstance = eChart.init(eChartRef.value!, "light", { renderer: "svg" });
      const options = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      eChartInstance.setOption(options);
    });
    return {
      eChartRef
    };
  }
});
</script>

<style scoped></style>
