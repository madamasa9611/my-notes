<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheSidebar from "./components/TheSidebar.vue";
import ContentArea from "./components/ContentArea.vue";
// 若你打算用 <RouterView>，也可以只保留 Header/SideBanner，
// 然後在 ContentArea 位置放 <RouterView/>。
</script>

<template>
  <div class="layout">
    <TheHeader class="header" />
    <TheSidebar class="sidebar" />
    <ContentArea class="main" />
  </div>
</template>

<style>
/* 全域高度鋪滿 */
html,
body,
#app {
  /* width: 100%; */
  height: 100%;
  margin: 0;
}

/* Grid 兩列、兩行：上方整列是 header；下方左是 sidebar、右是 main */
.layout {
  height: 100%;
  display: grid;
  /* 把固定 64px 改成 auto，第一列高度由 Header 內容決定 */
  grid-template-rows: auto 1fr;
  grid-template-columns: 280px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main";
}

/* 區塊對應格線區 */
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}

/* 簡易背景，方便肉眼區分 */
.sidebar {
  background: #fafafa;
}
.main {
  background: #ffffff;
}
</style>
