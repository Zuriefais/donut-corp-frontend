<script setup lang="ts">
import { onBeforeUnmount, onUnmounted, ref } from 'vue'
import { io } from 'socket.io-client'
import { chatStore } from '@/stores/chat'
import Dialog from '@/components/Dialog.vue'

const socket = io('ws://185.165.162.20:7777')
const socketId = ref('')
const selectUsernameDialogOpened = ref(true)
const chat = chatStore()
const di = ref(true)
const newMessageContent = ref('')

socket.on('connect', () => {
  socketId.value = socket.id
})

function close() {
  selectUsernameDialogOpened.value = false
}

socket.on('all-messages', (allMessages) => {
  chat.messages = [
    ...allMessages,
    ...chat.messages,
  ]
})

socket.on('recieve-message', (message) => {
  if (chat.username !== message.author)
    chat.messages.push(message)
})

function createMessage(event: Event) {
  if (newMessageContent.value !== '') {
    socket.emit('send-message', {
      author: chat.username,
      content: newMessageContent.value,
    })
    chat.messages.push({
      author: chat.username,
      content: newMessageContent.value,
    })
    newMessageContent.value = ''
  }

  event.preventDefault()
}
onUnmounted(() => {
  socket.disconnect()
})
</script>

<template>
  <div class="chat">
    <ul>
      <li>connect id:{{ socketId }}</li>
      <li
        v-for="message in chat.messages"
        :key="message.author"
        class="chat"
      >
        {{ message.author }}: {{ message.content }}
      </li>
      <li>
        <form @submit="createMessage">
          <input
            v-model="newMessageContent"
            type="text"
          >
          <button>
            отправить
          </button>
        </form>
      </li>
    </ul>
  </div>
  <Dialog
    :opened="selectUsernameDialogOpened"
    :cross="false"
    @close="close"
  >
    <div>
      <h1>Пожалуйста введите ник</h1>
      <form @submit="close">
        <input
          v-model="chat.username"
          type="text"
        >
      </form>
      <p>Идёт разработка</p>
    </div>
  </Dialog>
</template>

<style lang="sass">
.chat
  display: flex
  justify-content: center
  align-items: center
.chat ul li
  margin-top: 10px
</style>
