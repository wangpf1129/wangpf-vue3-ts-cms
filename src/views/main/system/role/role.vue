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
import { ref, computed, defineComponent } from "vue";

import PageContent from "@/components/pageContent/src/pageContent.vue";
import PageSearch from "@/components/pageSearch/src/pageSearch.vue";
import PageModal from "@/components/pageModal/src/pageModal.vue";

import { contentTableConfig, searchFormConfig, modalConfig } from "@/views/main/system/role/config";

import usePageSearchAndContent from "@/hooks/usePageSearchAndContent";
import usePageModal from "@/hooks/usePageModal";
import { useStore } from "@/store";

export default defineComponent({
  name: "role",
  components: { PageModal, PageSearch, PageContent },
  setup() {
    const { handleResetClick, handleQueryClick, pageContentRef } = usePageSearchAndContent();
    const { pageModalRef, defaultInfo, editPageData, addPageData } = usePageModal();

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
      menus
    };
  }
});
</script>

<style scoped></style>
