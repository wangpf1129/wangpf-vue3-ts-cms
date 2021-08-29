import { createStore } from "vuex";
import login from "@/store/login";
import type { IRootStore } from "./type";

const store = createStore<IRootStore>({
  state: () => ({
    name: "wangpf"
  }),
  modules: {
    login
  }
});

export const stepStore = () => {
  store.dispatch("login/loadLocalLoginData").then((r) => r);
};

export default store;
