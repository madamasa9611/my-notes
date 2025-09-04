import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    byId: useStorage('notes.byId', {
      intro:  { id: 'intro',  title: '導言',        content: '這是導言內容。' },
      vue3:   { id: 'vue3',   title: 'Vue 3 筆記',  content: '這裡放 Vue 3 筆記。' },
      three:  { id: 'three',  title: 'Three.js 筆記', content: '這裡放 Three.js 筆記。' },
    }),
  }),
  getters: {
    list: (s) => Object.values(s.byId),
    sortedByTitle() {
      return this.list.slice().sort((a, b) => a.title.localeCompare(b.title))
    },
    getById: (s) => (id) => s.byId[id] || null,
  },
  actions: {
    create({ id, title, content }) {
      this.byId[id] = { id, title, content }
    },
    update(id, partial) {
      if (!this.byId[id]) return
      this.byId[id] = { ...this.byId[id], ...partial }
    },
    remove(id) { delete this.byId[id] },
  },
  persist: true,
})
