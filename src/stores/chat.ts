import { defineStore } from 'pinia'

export const chatStore = defineStore({
  id: 'chat',
  state: () => ({
    username: '',
    messages: [] as { author: string; content: string }[],
  }),
})
