<template>
  <div class="auth">
    <picture>
      <source srcSet="auth/background.avif" type="image/avif">
      <source srcSet="auth/background.webp" type="image/webp">
      <img
        class="auth__background"
        decoding="async" loading="lazy"
        src="auth/background.jpg" alt="an avif image"
      >
    </picture>
    <div class="auth__content">
      <router-view />
    </div>
  </div>
</template>

<style lang="sass">
.auth
  display: flex
  overflow: hidden
  width: 100%
  height: 100vh
  &__background
    height: 100%
    max-width: 50vw
    object-fit: cover
  &__content
    display: flex
    justify-content: center
    align-items: center
    flex: 1
    margin: 0
    background: $sizzling-red
</style>
