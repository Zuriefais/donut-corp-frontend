<script setup lang="ts">
import IconCross from './icons/IconCross.vue'
const { cross = true, opened = false } = defineProps<{
  cross?: boolean
  opened?: boolean
}>()
const emit = defineEmits(['close'])
function close() {
  emit('close')
}
</script>

<template>
  <teleport to="body">
    <div
      v-if="opened"
      class="dialog__background"
    >
      <div class="dialog__content">
        <icon-cross
          v-if="cross"
          class="dialog__close"
          @click="close"
        />
        <slot />
      </div>
    </div>
  </teleport>
</template>

<style lang="sass">
.dialog
  &__background
    position: fixed
    display: flex
    justify-content: center
    align-items: center
    top: 0
    z-index: 1000
    width: 100%
    height: 100%
    background: rgba(33, 35, 49, 0.5)
    backdrop-filter: blur(5px)
  &__content
    border-radius: 8px
    width: 900px
    height: 750px
    background: white
    color: black
  &__close
    cursor: pointer
    margin: 5px 0 0 5px
</style>
