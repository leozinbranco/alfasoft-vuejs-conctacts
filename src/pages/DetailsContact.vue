<template>
  <div class="contact-card">
    <img :src="contact.photo" alt="Foto do contato" class="contact-photo" />
    <div class="contact-info">
      <h2>{{ contact.name }}</h2>
      <p>Contato: {{ contact.contact }}</p>
      <p>E-mail: {{ contact.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: "",
        contact: "",
        email: "",
        photo: "",
      },
    };
  },
  methods: {},
  mounted() {
    if (this.$route.query.email) {
      const email = this.$route.query.email;
      let storedContacts = JSON.parse(localStorage.getItem("contacts"));

      this.contact = storedContacts.find((contact) => contact.email === email);
    }
  },
};
</script>

<style>
.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: 20px auto;
}

.contact-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
}

.contact-info {
  text-align: center;
}
</style>
