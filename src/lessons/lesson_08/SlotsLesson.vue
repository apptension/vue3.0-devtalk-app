<template>
  <h1>Lesson 8 - slots and child -> parent</h1>
  <section>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <SlotsModal :show="showModal" @close="(value) => (showModal = value)">
      <template v-slot:header>
        <h3>custom header</h3>
      </template>
      <template v-slot:footer>
        <h3>custom footer</h3>
      </template>
    </SlotsModal>
  </section>
</template>

<script>
import { ref, defineAsyncComponent } from 'vue';
const SlotsModal = defineAsyncComponent(() => import('./SlotsModal.vue'));

export default {
  components: {
    SlotsModal,
  },
  setup() {
    const showModal = ref(false);
    return { showModal };
  },
};
</script>

<style></style>
