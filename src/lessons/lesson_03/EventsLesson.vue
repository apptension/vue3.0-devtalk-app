<template>
  <h1>Lesson 3 - events</h1>
  <section>
    <form @submit.prevent="showValue">
      <p><input v-model="name" /></p>
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const name = ref('Marcin');

    const showValue = () => {
      console.log(name.value);
    };
    return { name, showValue };
  },
};
</script>

<style></style>
<!--

<template>
  <h1>Lesson 3 - events</h1>
  <section>
    <form>
      <p><input :value="name" /></p>
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const name = ref('');

    return { name, age };
  },
};
</script>

<style></style>
-->
