<template>
  <h1>Lesson 2 - binding</h1>
  <section>
    <p>
      <a :href="url" target="_blank">Click here</a>
    </p>
  </section>
</template>

<script>
export default {
  setup() {
    const url = 'https://www.apptension.com/';

    return { url };
  },
};
</script>

<style></style>

<!--
<template>
  <h1>Lesson 2 - binding</h1>
  <section>
    <p>
      <a href="https://www.apptension.com/" target="_blank">Click here</a>
    </p>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>

<style></style>

-->
