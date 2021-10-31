<template>
  <div>
    <pf-echart :options="options"></pf-echart>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import PfEchart from "@/components/commonEchart";
import { IOptionDataType } from "../type";

export default defineComponent({
  components: { PfEchart },
  props: {
    pieData: Array as PropType<IOptionDataType[]>
  },
  setup(props) {
    const options = computed(() => {
      return {
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "horizontal",
          left: "left"
        },
        series: [
          {
            name: "分类数据",
            type: "pie",
            radius: "50%",
            data: props.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
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
