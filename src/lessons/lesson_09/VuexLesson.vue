<template>
  <h1>Lesson 9 - Vuex</h1>
  <section>
    <p>Current language: {{ language }}</p>
    <button @click="changeLanguage('English')">English</button>
    <button @click="changeLanguage('Polish')">Polish</button>
  </section>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const language = computed(() => store.getters.getLanguage);
    const changeLanguage = (value) => {
      store.commit('updateLanguage', value);
    };
    return { changeLanguage, language };
  },
};
</script>

<style></style>
<!--

<template>
  <h1>Lesson 9 - Vuex</h1>
  <section>
    <p>Current language: {{}}</p>
    <button @click="changeLanguage('English')">English</button>
    <button @click="changeLanguage('Polish')">Polish</button>
  </section>
</template>

<script>
export default {
  setup() {
    const changeLanguage = (value) => {
      console.log(value);
    };
    return { changeLanguage };
  },
};
</script>

<style></style>


-->
