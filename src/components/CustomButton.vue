<template>
  <button :class="['my-button', buttonType]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    buttonType: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary'].includes(value),
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.my-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.my-button.primary {
  background-color: #3498db;
  color: white;
}

.my-button.secondary {
  background-color: #2ecc71;
  color: white;
}
</style>
