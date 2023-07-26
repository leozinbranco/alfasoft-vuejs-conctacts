<template>
  <div class="header">
    <router-link to="/" class="tab" exact>Contacts</router-link>
    <router-link to="/newContact" class="tab" exact>NewContact</router-link>
    <!-- <router-link to="/details" class="tab" exact>DetailsContact</router-link> -->
  </div>
  <router-view />
</template>
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
</style>

