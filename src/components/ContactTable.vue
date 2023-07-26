<template>
  <div class="contact-table">
    <h2>Contacts List</h2>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contactsData" :key="contact.id">
            <td><img :src="contact.photo" width="50" /></td>
            <td>{{ contact.name }}</td>
            <td>
              <button @click="seeDetails(contact.email)">Details</button>
              <button @click="editContact(contact.email)">Edit</button>
              <button @click="deleteContact(contact.email)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contactsData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    editContact(email) {
      this.$emit("editContact", email);
      console.log(`Edit contact with ID: ${email}`);
    },
    deleteContact(email) {
      this.$emit("deleteContact", email);
      console.log(`Delete contact with ID: ${email}`);
    },
    seeDetails(email) {
      this.$emit("seeDetails", email);
      console.log(`Detail contact with ID: ${email}`);
    },
  },
};
</script>

<style>
.contact-table {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.table-container {
  width: 800px;
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 8px;
  border: 1px solid #ccc;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  padding: 6px 10px;
  margin-right: 5px;
  cursor: pointer;
}
</style>
