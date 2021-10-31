<template>
  <div class="roseEchart">
    <pf-echart :options="options" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import PfEchart from "@/components/commonEchart";
import { IOptionDataType } from "../type";

export default defineComponent({
  name: "roseEchart",
  components: { PfEchart },
  props: {
    roseData: Array as PropType<IOptionDataType[]>
  },
  setup(props) {
    const options = computed(() => {
      return {
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [8, 100],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8
            },
            data: props.roseData
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
