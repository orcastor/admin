<template>
  <el-container>
    <el-aside>
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
        <Tabs v-if="themeConfig.tabs" />
      </el-header>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <transition appear name="fade-transform" mode="out-in">
            <keep-alive :include="cacheRouter">
              <component :is="Component" :key="route.path"></component>
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
      <el-footer v-if="themeConfig.footer">
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Menu from "./Menu/index.vue";
import Header from "./Header/index.vue";
import Tabs from "./Tabs/index.vue";
import Footer from "./Footer/index.vue";
import cacheRouter from "@/routers/cacheRouter";
import { onMounted } from "vue";
import { AuthStore } from "@/store/modules/auth";
import { GlobalStore } from "@/store";

const authStore = AuthStore();
const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);

onMounted(async () => {
});
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
