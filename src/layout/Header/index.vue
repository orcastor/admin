<template>
  <div class="header">
    <div class="header-lf flx-center">
      <CollapseIcon id="collapseIcon" />
      <Breadcrumb v-if="themeConfig.breadcrumb" id="breadcrumb" />
    </div>
    <div class="header-ri flx-center">
      <div class="header-icon">
        <!-- Assembly size -->
        <AssemblySize id="assemblySize" />
        <!-- Language -->
        <Language id="language" />
        <!-- SearchMenu -->
        <SearchMenu id="searchMenu" />
        <!-- Theme -->
        <Theme id="theme" />
        <!-- Full screen -->
        <Fullscreen id="fullscreen" />
      </div>
      <!-- User name -->
      <span class="username">{{userInfo.name}}</span>
      <!-- Avatar -->
      <Avatar />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CollapseIcon from "./components/CollapseIcon.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import SearchMenu from "./components/SearchMenu.vue";
import Fullscreen from "./components/Fullscreen.vue";
import Language from "./components/Language.vue";
import AssemblySize from "./components/AssemblySize.vue";
import Theme from "./components/Theme.vue";
import Avatar from "./components/Avatar.vue";
import { GlobalStore } from "@/store";

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
const userInfo = computed(() => globalStore.userInfo);
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
