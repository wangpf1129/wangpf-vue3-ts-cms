<template>
  <div class="page-modal">
    <el-dialog title="提示" v-model="dialogVisible" width="30%" center>
      <pf-form v-bind="modalConfig" v-model="formData" />
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";
import { useStore } from "@/store";
import PfForm, { IForm } from "@/components/commonForm";
import { IPagePayloadEdit, IPagePayloadCreate } from "@/store/main/system/type";

export default defineComponent({
  components: { PfForm },
  props: {
    modalConfig: {
      type: Object as PropType<IForm>,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const dialogVisible = ref(false);
    const formData = ref<any>({});
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`];
        }
      }
    );

    // 处理编辑/新建逻辑
    const store = useStore();
    const handleConfirmClick = () => {
      dialogVisible.value = false;
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch("system/editPageDataAction", {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        } as IPagePayloadEdit);
      } else {
        // 新建
        store.dispatch("system/createPageDataAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        } as IPagePayloadCreate);
      }
    };
    return {
      dialogVisible,
      formData,
      handleConfirmClick
    };
  }
});
</script>

<style lang="scss" scoped></style>
