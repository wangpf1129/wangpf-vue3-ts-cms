import { Module } from "vuex";
import { IRootStore } from "@/store/type";
import { IDashboardState } from "./type";
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from "@/service/main/analysis/dashboardApi";

const dashboardStore: Module<IDashboardState, IRootStore> = {
  namespaced: true,
  state: () => ({
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    addressGoodsSale: []
  }),
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list;
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list;
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list;
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount();
      commit("changeCategoryGoodsCount", categoryCountResult.data);
      const categorySaleResult = await getCategoryGoodsSale();
      commit("changeCategoryGoodsSale", categorySaleResult.data);
      const categoryFavorResult = await getCategoryGoodsFavor();
      commit("changeCategoryGoodsFavor", categoryFavorResult.data);
      const addressGoodsResult = await getAddressGoodsSale();
      commit("changeAddressGoodsSale", addressGoodsResult.data);
    }
  }
};

export default dashboardStore;
