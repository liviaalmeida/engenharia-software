<template>
  <div class="login">
    <h1>desapega</h1>
    <h2>doe. encontre. troque. ajude o planeta!</h2>
    <form class="login-form" @submit.prevent="onSubmit">
      <DsInput label="Email" type="email"
      placeholder="Digite seu email"
      v-model="user.email" required />
      <DsInput label="Senha" type="password"
      placeholder="Digite a senha"
      :input-attrs="{ minLength: 8 }"
      v-model="user.password" required />
      <DsButton>
        {{ button }}
      </DsButton>
    </form>
    <button class="login-action"
    @click="registeredUser = !registeredUser">
      {{ action }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      registeredUser: true,
    }
  },
  computed: {
    action(): string {
      return this.registeredUser ?
        'Não tem conta? Clique aqui para fazer cadastro' :
        'Já tem conta? Clique aqui para fazer login'
    },
    button(): string {
      return this.registeredUser ?
        'Login' :
        'Signup'
    },
  },
  methods: {
    async onLogin() {
      const response = await this.$api.post('/login', this.user)
      console.log(response)
    },
    async onRegister() {
      const response = await this.$api.post('/login/register', this.user)
      console.log(response)
    },
    async onSubmit() {
      if (this.registeredUser) {
        await this.onLogin()
      } else {
        await this.onRegister()
      }
    },
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
  transform: translateY(-30px);

  &-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 25px;
    max-width: 350px;
    width: 100%;
  }

  &-action {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Roboto';
    margin-top: 20px;
  }
}
</style>
