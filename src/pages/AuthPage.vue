<template>
  <div class="auth-page">
    <div class="auth-container">
      <LoginForm v-if="!register" @toggle-register="toggleForm" />
      <RegisterForm v-else @toggle-register="toggleForm" />
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";

export default {
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      register: false,
    };
  },
  mounted() {
    if (this.$route.query.type == "register") this.register = true;
    else this.register = false;
  },
  methods: {
    toggleForm() {
      this.register = !this.register;
    },
  },
};
</script>
