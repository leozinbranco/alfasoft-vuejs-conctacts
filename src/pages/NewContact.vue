<template>
  <div>
    <ContactForm @sendForm="handleSendForm" />
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      image: "",
    };
  },
  methods: {
    handleSendForm(event) {
      const oldContacts = localStorage.getItem("contacts");
      let contacts = [];
      if (oldContacts && oldContacts.length > 0) {
        contacts = [event, ...JSON.parse(oldContacts)];
      } else {
        contacts = [event];
      }
      try {
        localStorage.setItem("contacts", JSON.stringify(contacts));
      } catch (e) {
        console.log(`Storage failed: ${e}`);
      }
    },
    // createImage(file) {
    //   const reader = new FileReader();

    //   reader.onload = (e) => {
    //     this.form.photo = e.target.result;
    //     this.set("img");
    //   };
    //   reader.readAsDataURL(file);
    // },
    // get(key) {
    //   this.form.photo = localStorage.getItem(key);
    // },
    // set(key) {
    //   try {
    //     localStorage.setItem(key, this.form.photo);
    //   } catch (e) {
    //     console.log(`Storage failed: ${e}`);
    //   }
    // },
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
</style>
