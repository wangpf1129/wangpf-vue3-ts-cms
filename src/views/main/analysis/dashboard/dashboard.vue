<template>
  <div class="dashboard">
    <el-row :gutter="12">
      <el-col :span="7">
        <pf-card title="分类商品数量(饼图)">
          <pie-echart :pie-data="categoryGoodsCount" />
        </pf-card>
      </el-col>
      <el-col :span="10">
        <pf-card title="不同城市商品销量">
          <map-echart :map-data="addressGoodsSale" />
        </pf-card>
      </el-col>
      <el-col :span="7">
        <pf-card title="分类商品数量(玫瑰图)">
          <rose-echart :rose-data="categoryGoodsCount" />
        </pf-card>
      </el-col>
    </el-row>

    <el-row :gutter="12" class="content-row">
      <el-col :span="12">
        <pf-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale" />
        </pf-card>
      </el-col>
      <el-col :span="12">
        <pf-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor" />
        </pf-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import PfCard from "@/components/commonCard";
import { pieEchart, roseEchart, lineEchart, barEchart, mapEchart } from "@/components/pageEchart";

export default defineComponent({
  name: "dashboard",
  components: { PfCard, pieEchart, roseEchart, lineEchart, barEchart, mapEchart },
  setup() {
    const store = useStore();
    store.dispatch("dashboard/getDashboardDataAction");
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount };
      });
    });

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale;
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name);
        values.push(item.goodsCount);
      }
      return { xLabels, values };
    });

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor;
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name);
        values.push(item.goodsFavor);
      }
      return { xLabels, values };
    });

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count };
      });
    });

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    };
  }
});
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
