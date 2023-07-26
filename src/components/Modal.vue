<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <p>{{ text }}</p>
      <div class="modal-actions">
        <button @click="onConfirm">Confirmar</button>
        <button @click="onCancel">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    text: {
      type: String,
      default: 'Tem certeza que deseja continuar?',
    },
    onConfirm: {
      type: Function,
      default: () => {},
    },
    onCancel: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style>
/* Estilos do modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

button {
  margin-left: 10px;
}
</style>
