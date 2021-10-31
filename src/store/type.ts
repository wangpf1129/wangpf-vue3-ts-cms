import { ILoginStore } from "@/store/login/type";
import { ISystemStore } from "@/store/main/system/type";
import { IDashboardState } from "@/store/main/analysis/type";

export interface IRootStore {
  name: string;
  entireDepartment: string[];
  entireRole: string[];
  entireMenu: any[];
}

export interface IRootWithModules {
  login: ILoginStore;
  system: ISystemStore;
  dashboard: IDashboardState;
}

export type IStoreType = IRootStore & IRootWithModules;
