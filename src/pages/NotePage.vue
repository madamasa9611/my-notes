<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useNotesStore } from '../stores/notes'

const route = useRoute()
const notes = useNotesStore()
const note = computed(() => notes.getById(route.params.id))
</script>

<template>
  <section class="note-page">
    <template v-if="note">
      <h2>{{ note.title }}</h2>
      <p style="white-space: pre-wrap">{{ note.content }}</p>
    </template>
    <template v-else>
      <h2>找不到這篇筆記</h2>
      <p>請從左側選單選擇其他筆記。</p>
    </template>
  </section>
</template>

<style scoped>
.note-page { padding: 16px; }
</style>
