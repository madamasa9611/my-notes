<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useNotesStore } from "@/stores/notes";

const notes = useNotesStore();
const route = useRoute();

const items = computed(() => notes.sortedByTitle); // 或 notes.list
const activeId = computed(() => route.params.id);
</script>

<template>
  <aside class="side-banner">
    <nav class="menu">
      <RouterLink
        v-for="n in items"
        :key="n.id"
        class="menu-item"
        :to="`/notes/${n.id}`"
        :data-active="n.id === activeId"
      >
        {{ n.title }}
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.side-banner {
  background-color: blue;
  height: 100%;
  padding: 16px;
  border-right: 1px solid #e5e7eb;
}
.menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.menu-item {
  padding: 8px 10px;
  text-decoration: none;
  color: inherit;
  border: 1px solid #e5e7eb;
  background: red;
}
.menu-item[data-active="true"] {
  border-color: #646cff;
  outline: 2px solid #646cff55;
}
</style>
