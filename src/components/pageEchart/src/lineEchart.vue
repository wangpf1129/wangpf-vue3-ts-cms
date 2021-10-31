<template>
  <div class="lineEchart">
    <pf-echart :options="options" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import PfEchart from "@/components/commonEchart";

export default defineComponent({
  name: "lineEchart",
  components: { PfEchart },
  props: {
    xLabels: Array as PropType<string[]>,
    values: Array as PropType<any[]>
  },
  setup(props) {
    const options = computed(() => {
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {},
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: props.xLabels
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "类别销量",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: props.values
          }
        ]
      };
    });
    return {
      options
    };
  }
});
</script>

<style lang="scss" scoped></style>
