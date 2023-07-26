<template>
  <div class="app-content">
    <ContactTable
      :contactsData="contacts"
      @editContact="handleEditContact"
      @deleteContact="handleShowModalConfirmation"
      @seeDetails="handleSeeDetailsContact"
    />

    <Modal
      :show="showModal"
      text="Tem certeza que deseja excluir?"
      :onConfirm="handleDeleteContact"
      :onCancel="handleCancel"
    />
  </div>
</template>

<script>
import ContactTable from "../components/ContactTable.vue";
import Modal from "../components/Modal.vue";
// eslint-disable-next-line no-unused-vars

export default {
  components: {
    ContactTable,
    Modal,
  },
  data() {
    return {
      contacts: [],
      showModal: false,
      emailToExclude: "",
    };
  },
  methods: {
    handleDeleteContact() {
      let storedContacts = JSON.parse(localStorage.getItem("contacts"));
      let newContacts = storedContacts.filter(
        (contact) => contact.email !== this.emailToExclude
      );
      localStorage.setItem("contacts", JSON.stringify(newContacts));
      this.showModal = false;
      this.loadLocalStorageData();
    },
    handleEditContact(event) {
      this.$router.push({
        path: "/newContact",
        query: {
          email: event,
        },
      });
    },
    handleSeeDetailsContact(event) {
      this.$router.push({
        path: "/details",
        query: {
          email: event,
        },
      });
    },
    loadLocalStorageData() {
      this.contacts = JSON.parse(localStorage.getItem("contacts"));
    },
    handleShowModalConfirmation(email) {
      this.showModal = true;
      this.emailToExclude = email;
    },
    handleCancel() {
      this.emailToExclude = "";
      this.showModal = false;
    },
  },
  mounted() {
    this.loadLocalStorageData();
  },
};
</script>
<style >
.app-content {
  display: flex;
  background-color: rgb(255, 255, 255);
}
</style>
