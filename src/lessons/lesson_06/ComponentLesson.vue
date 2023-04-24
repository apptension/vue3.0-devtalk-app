<template>
  <h1>Lesson 6 - components</h1>
  <section>
    <h2>to do list {{ name }}:</h2>
    <br />
    <to-do-item itemName="shopping" />
    <to-do-item itemName="learning" priority="medium" />
    <to-do-item itemName="working" priority="very" />
  </section>
</template>

<script>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';
export default {
  setup() {
    const name = ref('Marcin');
    setTimeout(() => {
      name.value = 'Jan';
    }, 2000);
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    return { name };
  },
};
</script>

<style></style>

<!--

<template>
  <h1>Lesson 6 - components</h1>
  <section>
    <h2>to do list:</h2>
    <br />
    <ToDoItem itemName="shopping" priority="high" />
    <to-do-item itemName="learning" priority="medium" />
    <to-do-item itemName="working" priority="low" />
  </section>
</template>

<script>
import ToDoItem from './ToDoItem.vue';

export default {
  components: { ToDoItem },
};
</script>

<style></style>

-->
