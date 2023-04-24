<template>
  <p>{{ itemName }} - {{ priority }}</p>
</template>

<script>
export default {
  props: {
    itemName: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: false,
      default: 'medium',
      validator: (value) =>
        value === 'low' || value === 'medium' || value === 'high',
    },
  },
  setup() {
    const url = 'https://www.apptension.com/';

    return { url };
  },
};
</script>

<style></style>
