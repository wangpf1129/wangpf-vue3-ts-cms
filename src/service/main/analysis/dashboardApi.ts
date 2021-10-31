import { request } from "@/service";
import { IDataType } from "@/service/type";

enum DashboardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale"
}

export const getCategoryGoodsCount = () => {
  return request.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  });
};

export const getCategoryGoodsSale = () => {
  return request.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  });
};

export const getCategoryGoodsFavor = () => {
  return request.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  });
};

export const getAddressGoodsSale = () => {
  return request.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  });
};
