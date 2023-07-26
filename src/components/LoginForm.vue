<template>
  <div class="auth-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Usuário:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Entrar</button>
    </form>
    <div class="register-link">
      <span>Não possui uma conta? </span>
      <a @click="toggleRegister">Registre-se</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const users = JSON.parse(localStorage.getItem("usuarios") || "[]");
      const user = users.find(
        (u) => u.username === this.username && u.password === this.password
      );
      if (user) {
        alert("Login bem-sucedido!");
        localStorage.setItem(
          "logged",
          JSON.stringify({
            logged: true,
            username: this.username,
            password: this.password,
          })
        );
        window.dispatchEvent(
          new CustomEvent("user-logged", {
            detail: {
              storage: localStorage.getItem("logged"),
            },
          })
        );

        this.$router.push({
          path: "/",
        });
      } else {
        alert("Usuário ou senha inválidos!");
      }
    },
    toggleRegister() {
      this.$emit("toggle-register");
    },
  },
};
</script>

<style>
/* Estilos para a tela de login */
</style>
