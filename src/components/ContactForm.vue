<!-- eslint-disable no-unused-vars -->
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
          />
        </div>

        <div class="form-group">
          <label for="emailInput">Endereço de e-mail:</label>
          <input type="email" id="emailInput" v-model="form.email" required />
        </div>

        <div class="form-group">
          <label for="photoInput">Upload de foto:</label>
          <input type="file" id="photoInput" @change="onImageChange" required />
        </div>

        <button type="submit">Enviar</button>
        <button type="reset">Limpar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        contact: "",
        email: "",
        photo: "",
      },
    };
  },
  methods: {
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
    onImageChange(e) {
      const reader = new FileReader();

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      reader.onload = (e) => {
        this.form.photo = e.target.result;
      };
      reader.readAsDataURL(files[0]);
    },
    // onFileChange(e) {
    //   var files = e.target.files || e.dataTransfer.files;
    //   if (!files.length) return;
    //   this.createImage(files[0]);
    // },
    // createImage(file) {
    //   //TERA QUE SER UTILIZADO EM OUTROS LUGARES
    //   const reader = new FileReader();

    //   reader.onload = (e) => {
    //     this.form.photo = e.target.result;
    //     this.set("img");
    //   };
    //   reader.readAsDataURL(file);
    // },

    submitForm() {
      this.$emit("sendForm", this.form);
    },
    resetForm() {
      this.form = {
        name: "",
        contact: "",
        email: "",
        photo: null,
      };
    },
    // handleFileChange(event) {
    //   var files = event.target.files || event.dataTransfer.files;
    //   if (!files.length) {
    //     return;
    //   }
    //   this.createImage(files[0]);
    //   //   this.form.photo = event.target.files[0];
    // },
  },
};
</script>

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
