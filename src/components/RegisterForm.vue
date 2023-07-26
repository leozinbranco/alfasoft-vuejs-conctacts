<template>
  <div class="auth-form">
    <h2>Registrar-se</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="newUsername">Novo Usuário:</label>
        <input type="text" id="newUsername" v-model="newUsername" required />
      </div>
      <div class="form-group">
        <label for="newPassword">Nova Senha:</label>
        <input type="password" id="newPassword" v-model="newPassword" required />
      </div>
      <button type="submit">Registrar</button>
    </form>
    <div class="login-link">
      <span>Já possui uma conta? </span>
      <a @click="toggleRegister">Entrar</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUsername: '',
      newPassword: '',
    };
  },
  methods: {
    register() {
      const users = JSON.parse(localStorage.getItem('usuarios') || '[]');
      const userExists = users.some(u => u.username === this.newUsername);

      if (userExists) {
        alert('Usuário já existe. Por favor, escolha outro nome de usuário.');
      } else {
        users.push({ username: this.newUsername, password: this.newPassword });
        localStorage.setItem('usuarios', JSON.stringify(users));
        alert('Registro bem-sucedido! Você já pode fazer login.');
        this.toggleRegister();
      }
    },
    toggleRegister() {
      this.$emit('toggle-register');
    }
  },
};
</script>
