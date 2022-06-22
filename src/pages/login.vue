<script setup lang="ts">
const form = reactive({
  username: '',
  password: '',
})

function auth() {
  // eslint-disable-next-line no-console
  console.log('привет')
}
</script>

<template>
  <div class="login">
    <h1>Вход в аккаунт</h1>
    <el-form v-model="form" class="login__form">
      <el-form-item>
        <el-input
          v-model="form.username"
          type="text"
          placeholder="Логин"
        />
        <el-input
          v-model="form.password"
          class="login__password"
          type="password"
          placeholder="Пароль"
          show-password
        />
      </el-form-item>
      <el-button @click="auth">
        Войти
      </el-button>
    </el-form>
  </div>
</template>

<style lang="sass">
.login
  display: flex
  flex-direction: column
  align-items: center
  color: white
  height: 400px
  h1
    font-size: 35px
  &__form
    display: flex
    flex-direction: column
    align-items: center
  &__password
    margin-top: 20px
</style>

<route lang="yaml">
meta:
  layout: auth
</route>
