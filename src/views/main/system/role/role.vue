<template>
  <div class="role">
    <page-search
      :search-form-config="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="role"
      @editBtnClick="editPageData"
      @addBtnClick="addPageData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      page-name="role"
      :otherInfo="otherInfo"
      :modal-config="modalConfig"
      :default-info="defaultInfo"
    >
      <div style="margin-left: 32px">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent, nextTick } from "vue";
import { useStore } from "@/store";
import { ElTree } from "element-plus";

import PageContent from "@/components/pageContent/src/pageContent.vue";
import PageSearch from "@/components/pageSearch/src/pageSearch.vue";
import PageModal from "@/components/pageModal/src/pageModal.vue";

import { contentTableConfig, searchFormConfig, modalConfig } from "@/views/main/system/role/config";

import usePageSearchAndContent from "@/hooks/usePageSearchAndContent";
import usePageModal from "@/hooks/usePageModal";
import { mapMenusLeafKeys } from "@/utils/mapMenus";

export default defineComponent({
  name: "role",
  components: { PageModal, PageSearch, PageContent },
  setup() {
    const { handleResetClick, handleQueryClick, pageContentRef } = usePageSearchAndContent();

    // 编辑时回显菜单树
    const elTreeRef = ref<InstanceType<typeof ElTree>>();
    const editCallback = (item: any) => {
      const leafKeys = mapMenusLeafKeys(item.menuList);
      nextTick(() => {
        console.log(elTreeRef.value);
        elTreeRef.value?.setCheckedKeys(leafKeys, false);
      });
    };

    const { pageModalRef, defaultInfo, editPageData, addPageData } = usePageModal(editCallback);

    // 显示和选择 菜单树
    const store = useStore();
    const otherInfo = ref({});
    const menus = computed(() => store.state.entireMenu);
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = { menuList };
    };
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfig,
      pageModalRef,
      defaultInfo,
      editPageData,
      addPageData,
      otherInfo,
      handleCheckChange,
      menus,
      elTreeRef
    };
  }
});
</script>

<style scoped></style>
