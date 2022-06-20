<script setup lang="ts">
import { ref } from 'vue'
import MainMenu from '@/components/MainMenu.vue'
import Dialog from '@/components/Dialog.vue'

const infoDialogOpened = ref(true)

function close() {
  infoDialogOpened.value = false
}
</script>

<template>
  <header>
    <MainMenu />
  </header>
  <div class="empty" />
  <main>
    <router-view />
  </main>
  <footer>
    <Dialog
      :opened="infoDialogOpened"
      @close="close()"
    >
      <div>Идёт разработка!</div>
    </Dialog>
  </footer>
</template>

<style lang="sass">
header
  display: flex
  justify-content: center
.empty
  height: 150px
footer
  position: fixed
  bottom: 0
</style>
