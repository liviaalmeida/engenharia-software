<template>
  <div class="login">
    <h1>desapega</h1>
    <h2>doe. encontre. troque. ajude o planeta!</h2>
    <form class="login-form" @submit.prevent>
      <DsInput label="Email" type="email"
      placeholder="Digite o email de login ou cadastro"
      v-model="login.name" required />
      <DsInput label="Senha" type="password"
      placeholder="Digite a senha"
      :input-attrs="{ minLength: 8 }"
      v-model="login.pass" required />
      <DsButton>
        Login
      </DsButton>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      login: {
        name: '',
        pass: '',
      },
    }
  },
})
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 20px;

  &-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 25px;
    max-width: 350px;
    width: 100%;
  }
}
</style>
