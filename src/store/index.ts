import { createStore, Store, useStore as useVuexStore } from "vuex";
import login from "@/store/login";
import system from "@/store/main/system";
import dashboard from "@/store/main/analysis/dashboard";
import type { IRootStore, IStoreType } from "./type";
import { fetchPageListData } from "@/service/main/system/systemApi";

const store = createStore<IRootStore>({
  state: () => ({
    name: "wangpf",
    entireDepartment: [],
    entireRole: [],
    entireMenu: []
  }),
  mutations: {
    changeDepartment(state, list) {
      state.entireDepartment = list;
    },
    changeRole(state, list) {
      state.entireRole = list;
    },
    changeMenu(state, list) {
      state.entireMenu = list;
    }
  },
  actions: {
    async fetchInitialDataAction({ commit }) {
      //  请求部门和角色数据
      const {
        data: { list: departmentList }
      } = await fetchPageListData("/department/list", {
        offset: 0,
        size: 100
      });

      const {
        data: { list: roleList }
      } = await fetchPageListData("/role/list", {
        offset: 0,
        size: 100
      });

      // 请求角色权限数据
      const {
        data: { list: menuList }
      } = await fetchPageListData("/menu/list", {});

      // 保存数据
      commit("changeDepartment", departmentList);
      commit("changeRole", roleList);
      commit("changeMenu", menuList);
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
});

export const stepStore = () => {
  store.dispatch("login/loadLocalLoginData").then((r) => r);
  store.dispatch("fetchInitialDataAction").then((r) => r);
};
export const useStore = (): Store<IStoreType> => {
  return useVuexStore();
};
export default store;
