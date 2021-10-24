import { ITable } from "@/components/commonTable/type";
import { IForm } from "@/components/commonForm";

const searchFormConfig: IForm = {
  itemStyle: { padding: "6px 12px", textAlign: "center" },
  formItems: [
    {
      field: "id",
      type: "input",
      placeholder: "角色id"
    },
    {
      field: "name",
      type: "input",
      placeholder: "角色名"
    }
  ]
};

const contentTableConfig: ITable = {
  title: "角色列表",
  isShowIndexColumn: false,
  isShowSelectColumn: true,
  propListConfig: [
    { prop: "id", label: "角色ID", minWidth: "100" },
    { prop: "name", label: "角色名", minWidth: "100" },
    { prop: "intro", label: "权限", minWidth: "100" },
    { prop: "createAt", label: "创建时间", minWidth: "250", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: "250", slotName: "updateAt" },
    { label: "操作", minWidth: "120", slotName: "handler" }
  ]
};

const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名",
      placeholder: "请输入角色名"
    },
    {
      field: "intro",
      type: "input",
      label: "角色介绍",
      placeholder: "请输入角色介绍"
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {},
  labelWidth: "100px"
};
export { contentTableConfig, searchFormConfig, modalConfig };
