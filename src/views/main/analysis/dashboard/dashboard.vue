<template>
  <div class="dashboard">
    <el-row :gutter="12">
      <el-col :span="7">
        <pf-card title="分类商品数量(饼图)" />
      </el-col>
      <el-col :span="10">
        <pf-card title="不同城市商品销量" />
      </el-col>
      <el-col :span="7">
        <pf-card title="分类商品数量(玫瑰图)" />
      </el-col>
    </el-row>

    <el-row :gutter="12" class="content-row">
      <el-col :span="12">
        <pf-card title="分类商品的销量">
          <pf-echart :options="options" />
        </pf-card>
      </el-col>
      <el-col :span="12">
        <pf-card title="分类商品的收藏"></pf-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import PfCard from "@/components/commonCard";
import PfEchart from "@/components/commonEchart";

export default defineComponent({
  name: "dashboard",
  components: { PfCard, PfEchart },
  setup() {
    const store = useStore();
    store.dispatch("dashboard/getDashboardDataAction");
    const options = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line"
        }
      ]
    };
    return {
      options
    };
  }
});
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
