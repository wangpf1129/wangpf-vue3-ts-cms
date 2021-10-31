<template>
  <div class="barEchart">
    <pf-echart :options="options"></pf-echart>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import * as echarts from "echarts";
import PfEchart from "@/components/commonEchart";

export default defineComponent({
  name: "barEchart",
  components: { PfEchart },
  props: {
    xLabels: Array as PropType<string[]>,
    values: Array as PropType<any[]>
  },
  setup(props) {
    const options = computed(() => {
      return {
        xAxis: {
          data: props.xLabels,
          axisLabel: {
            inside: true,
            color: "#fff"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#999"
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" }
                ])
              }
            },
            data: props.values
          }
        ]
      };
    });
    return { options };
  }
});
</script>

<style scoped></style>
