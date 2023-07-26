<template>
  <div class="app-content">
    <ContactForm
      @sendForm="handleSendForm"
      @editForm="handleEditContact"
      :existingContact="editContact"
    />
    <Modal
      :show="showModal"
      :text="modalMessage"
      :question="false"
      :onConfirm="handleConfirm"
    />
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
import Modal from "../components/Modal.vue";

export default {
  components: {
    ContactForm,
    Modal,
  },
  data() {
    return {
      showModal: false,
      editContact: null,
      modalMessage: "",
    };
  },
  mounted() {
    if (this.$route.query.email) {
      const email = this.$route.query.email;
      let storedContacts = JSON.parse(localStorage.getItem("contacts"));

      this.editContact = storedContacts.find(
        (contact) => contact.email === email
      );
    }
  },
  methods: {
    handleConfirm() {
      this.showModal = false;
      this.$router.push({
        path: "/",
      });
    },
    handleEditContact(event) {
      const newContact = {
        email: event.email,
        contact: event.contact,
        name: event.name,
        photo: event.photo,
      };
      let storedContacts = JSON.parse(localStorage.getItem("contacts"));

      const newContactsEdited = storedContacts.map((contact) => {
        if (contact.email === event.editedEmail) return newContact;
        else return contact;
      });
      localStorage.setItem("contacts", JSON.stringify(newContactsEdited));
      this.modalMessage = "Contato alterado com sucesso!";
      this.showModal = true;
    },
    handleSendForm(event) {
      const oldContacts = localStorage.getItem("contacts");
      let contacts = [];
      if (event.photo === "" || !event.photo) {
        this.modalMessage = "É necessário incluir uma imagem!";
        contacts = JSON.parse(oldContacts);
      } else {
        if (oldContacts && oldContacts.length > 0) {
          const verifyEmail = JSON.parse(oldContacts);
          if (
            verifyEmail.find(
              (contact) =>
                contact.email === event.email || contact.name === event.name
            )
          ) {
            this.modalMessage = "Endereço de email e/ou contato já existente!";
            contacts = verifyEmail;
          } else {
            contacts = [event, ...verifyEmail];
            this.modalMessage = "Contato cadastrado com sucesso!";
          }
        } else {
          contacts = [event];
          this.modalMessage = "Contato cadastrado com sucesso!";
        }
      }
      localStorage.setItem("contacts", JSON.stringify(contacts));
      this.showModal = true;
    },
  },
};
</script>
<style >
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
.app-content {
  display: flex;
  background-color: rgb(255, 255, 255);
}
</style>
