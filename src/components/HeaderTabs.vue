<template>
  <div class="header-tabs">
    <router-link :to="{ name: 'Home' }" class="tab" exact> Home </router-link>
    <router-link :to="{ name: 'Contacts' }" class="tab" exact>
      Contacts
    </router-link>
    <router-link :to="{ name: 'About' }" class="tab" exact> About </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
</style>
