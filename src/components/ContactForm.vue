<template>
  <div class="contact-form">
    <div class="form-container">
      <form @submit.prevent="submitForm" @reset.prevent="resetForm">
        <div class="form-group">
          <img :src="form.photo" width="50" />
        </div>
        <div class="form-group">
          <label for="nameInput">Nome:</label>
          <input type="text" id="nameInput" v-model="form.name" required />
        </div>

        <div class="form-group">
          <label for="contactInput">Contato:</label>
          <input
            type="text"
            id="contactInput"
            v-model="form.contact"
            required
            v-mask="[
              '####-####',
              '#####-####',
              '(##) ####-####',
              '(##) #####-####',
            ]"
          />
        </div>

        <div class="form-group">
          <label for="emailInput">Endereço de e-mail:</label>
          <input type="email" id="emailInput" v-model="form.email" required />
        </div>

        <div class="form-group">
          <label for="photoInput">Upload de foto:</label>
          <input type="file" id="photoInput" @change="onImageChange" />
        </div>

        <button type="submit" v-if="!existingContact">Enviar</button>
        <button type="submit" v-else>Editar</button>
        <button type="reset">Limpar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    existingContact: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      editedEmail: "",
      form: {
        name: "",
        contact: "",
        email: "",
        photo: "",
      },
    };
  },
  methods: {
    onImageChange(e) {
      const reader = new FileReader();
      const files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;
      reader.onload = (e) => {
        this.form.photo = e.target.result;
      };
      reader.readAsDataURL(files[0]);
    },
    submitForm() {
      if (this.existingContact) {
        this.$emit("editForm", { editedEmail: this.editedEmail, ...this.form });
      } else {
        this.$emit("sendForm", this.form);
      }
    },
    resetForm() {
      this.form = {
        name: "",
        contact: "",
        email: "",
        photo: null,
      };
    },
  },
  watch: {
    existingContact: {
      immediate: true,
      handler(value) {
        if (value) {
          this.form = { ...value };
          this.editedEmail = this.form.email;
        }
      },
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
</style>

<style>
.contact-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.form-container {
  max-width: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
}

input[type="text"],
input[type="email"],
input[type="file"] {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
