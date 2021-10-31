<template>
  <div class="echart">
    <div ref="echartRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults } from "vue";
import * as echart from "echarts";
import { EChartsOption } from "echarts";
// 定义props
const props = withDefaults(
  defineProps<{
    options: EChartsOption;
    width?: string;
    height?: string;
  }>(),
  {
    width: "100%",
    height: "360px"
  }
);

const echartRef = ref<HTMLElement>();
onMounted(() => {
  const echartInstance = echart.init(echartRef.value!);
  echartInstance.setOption(props.options);
});
</script>

<style lang="scss" scoped></style>
