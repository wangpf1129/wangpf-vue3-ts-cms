<template>
  <div class="dashboard">
    <el-row :gutter="12">
      <el-col :span="7">
        <pf-card title="分类商品数量(饼图)">
          <pie-echart :pie-data="categoryGoodsCount" />
        </pf-card>
      </el-col>
      <el-col :span="10">
        <pf-card title="不同城市商品销量" />
      </el-col>
      <el-col :span="7">
        <pf-card title="分类商品数量(玫瑰图)">
          <rose-echart :rose-data="categoryGoodsCount" />
        </pf-card>
      </el-col>
    </el-row>

    <el-row :gutter="12" class="content-row">
      <el-col :span="12">
        <pf-card title="分类商品的销量"></pf-card>
      </el-col>
      <el-col :span="12">
        <pf-card title="分类商品的收藏"></pf-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import PfCard from "@/components/commonCard";
import { pieEchart, roseEchart } from "@/components/pageEchart";

export default defineComponent({
  name: "dashboard",
  components: { PfCard, pieEchart, roseEchart },
  setup() {
    const store = useStore();
    store.dispatch("dashboard/getDashboardDataAction");
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount };
      });
    });
    return {
      categoryGoodsCount
    };
  }
});
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
