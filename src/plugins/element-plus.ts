import type { App } from "vue";
import "element-plus/lib/theme-chalk/base.css";
import {
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElRadio,
  ElLink,
  ElMessage,
  ElMain,
  ElContainer,
  ElHeader,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElCol,
  ElRow,
  ElSelect,
  ElDatePicker,
  ElOption,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElPopover,
  ElMessageBox,
  ElDialog,
  ElTree,
  ElCard
} from "element-plus";

const components = [
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElLink,
  ElRadio,
  ElCheckbox,
  ElMessage,
  ElMain,
  ElContainer,
  ElHeader,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElDatePicker,
  ElOption,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElPopover,
  ElMessageBox,
  ElDialog,
  ElTree,
  ElCard
];

export default function registerElementPlus(app: App): void {
  app.config.globalProperties.$ElMessage = ElMessage;
  app.config.globalProperties.$ElMessageBox = ElMessageBox;

  for (const component of components) {
    app.component(component.name, component);
  }
}
