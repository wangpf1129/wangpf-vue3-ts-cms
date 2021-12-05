<template>
  <div id="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

export default defineComponent({
  name: "App",
  components: { ElConfigProvider },
  setup() {
    onMounted(() => {
      console.log(
        `${
          process.env.NODE_ENV === "production" ? "Prod" : "Dev"
        }  %后台管理 %c FEAT 2021-1205-1418-V1`
      );
    });
    return { zhCn };
  }
});
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
