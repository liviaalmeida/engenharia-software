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
      :input-attrs="{ minLength: 6 }"
      v-model="user.password" required />
      <DsButton>
        {{ button }}
      </DsButton>
    </form>
    <button class="login-action"
    @click="registeredUser = !registeredUser">
      {{ action }}
    </button>
    <DsModal v-model="alert.show"
    :title="alert.title"
    :text="alert.text"
    :type="alert.type" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      alert: {
        show: false,
        title: '',
        text: '',
        type: 'error',
      },
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
        'Não tem conta? Clique aqui para se cadastrar' :
        'Já tem conta? Clique aqui para fazer login'
    },
    button(): string {
      return this.registeredUser ?
        'Login' :
        'Cadastrar'
    },
    redirect(): string {
      return this.$route.query?.redirect as string || '/'
    },
  },
  methods: {
    async onLogin() {
      this.$store.dispatch('startLoading')
      const { token } = await this.$api.post('/login', this.user)
      this.$store.dispatch('stopLoading')
      if (!token) {
        this.alert = {
          show: true,
          title: 'Erro',
          text: 'Erro ao fazer login',
          type: 'error',
        }
        return
      }
      this.$store.dispatch('login', token)
      this.$router.push(this.redirect)
    },
    async onRegister() {
      this.$store.dispatch('startLoading')
      const { user } = await this.$api.post('/login/register', this.user)
      this.$store.dispatch('stopLoading')
      if (!user) {
        this.alert = {
          show: true,
          title: 'Erro',
          text: 'Erro ao cadastrar usuário',
          type: 'error',
        }
        return
      }
     this.alert = {
        show: true,
        title: 'Sucesso',
        text: 'Usuário cadastrado com sucesso!',
        type: 'success',
      }
      this.registeredUser = true
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
    font-size: 14px;
    margin-top: 20px;
  }
}
</style>
