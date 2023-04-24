<template>
  <h1>Lesson 1 - state management</h1>
  <section>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const name = ref('Marcin');
    let age = 20;

    setTimeout(() => {
      console.log('age has been changed');
      name.value = 'Jan';
      age = 25;
    }, 2000);

    return { name, age };
  },
};
</script>

<style></style>

<!--
<template>
  <h1>Lesson 1 - state management</h1>
  <section>
    <p>Marcin</p>
    <p>15</p>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
-->
