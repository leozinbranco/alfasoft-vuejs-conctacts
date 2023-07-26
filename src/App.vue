<template>
  <div class="header">
    <router-link to="/" class="tab" exact>Contacts</router-link>
    <router-link v-if="isLogged" to="/newContact" class="tab" exact
      >NewContact</router-link
    >
    <!-- <router-link to="/details" class="tab" exact>DetailsContact</router-link> -->
    <div class="container-button">
      <button v-if="!isLogged" class="login-button" @click="handleLoginClick">
        <i class="fas fa-sign-in-alt"></i> Login
      </button>
      <button
        v-if="!isLogged"
        class="register-button"
        @click="handleRegisterClick"
      >
        <i class="fas fa-sign-in-alt"></i> Register
      </button>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      isLogged: false,
    };
  },
  methods: {
    handleLoginClick() {
      this.$router.push({
        path: "/login",
      });
    },
    handleRegisterClick() {
      this.$router.push({
        path: "/login",
        query: {
          type: 'register',
        },
      });
    },
  },
  mounted() {
    window.addEventListener("user-logged", (event) => {
      const parsedJson = JSON.parse(event.detail.storage);
      this.isLogged = parsedJson.logged;
    });
  },
};
</script>
<style>
html,
body {
  margin: 0px !important;
  padding: 0px !important;
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  height: 100%;
}
.header-tabs {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #004ee9;
}

.tab {
  text-decoration: none;
  color: #333;
  padding: 8px 16px;
  border-radius: 5px;
}

.tab:hover {
  background-color: #ddd;
}
.login-button {
  position: absolute;
  top: 20px;
  right: 120px;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
.register-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

i {
  margin-right: 4px;
}
</style>

