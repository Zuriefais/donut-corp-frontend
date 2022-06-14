<script setup lang="ts">
import { ref } from 'vue'

const menu = ref([
  {
    label: 'чат',
    routeName: 'chat',
  },
  {
    label: '2',
    routeName: '2',
  },
  {
    logo: true,
    routeName: 'main',
  },
  {
    label: '4',
    routeName: '4',
  },
  {
    label: '5',
    routeName: '5',
  },
])
</script>

<script lang="ts">

</script>

<template>
  <ul class="main-menu">
    <li
      v-for="item in menu"
      :key="item.label"
      class="main-menu__item"
    >
      <router-link
        class="main-menu__item-link"
        active-class="main-menu__item-link--active"
        :to="{ name: item.routeName }"
      >
        <template v-if="!item.logo">
          {{ item.label }}
        </template>
        <h1 v-else>
          Education<br>Project
        </h1>
      </router-link>
    </li>
  </ul>
</template>

<style lang="sass">
  .main-menu
    margin: 0 0 0 0
    position: fixed
    top: 0px
    display: flex
    align-items: center
    justify-content: space-evenly
    width: 750px
    background-color: rgba(33, 35, 49, 0.5)
    backdrop-filter: blur(5px)
    &__item-link
      color: white
      text-decoration: none
      &--active
        color: red
</style>
