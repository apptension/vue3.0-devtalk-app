<template>
  <h1>Lesson 4 - computed + watchers</h1>
  <section>
    <p>{{ reverseMessage() }}</p>
    <p>{{ reverseMessageComputed }}</p>
    <p>{{ name }}</p>
  </section>
</template>

<script>
import { computed, ref, watch } from 'vue';

export default {
  setup() {
    const message = ref('Hello');
    const name = ref('Marcin');
    const reverseMessage = () => {
      console.log('reverseMessage run');
      return message.value.split('').reverse().join('');
    };

    const reverseMessageComputed = computed(() => {
      console.log('reverseMessageComputed run');
      return message.value.split('').reverse().join('');
    });

    setTimeout(() => {
      console.log('name has been changed');
      message.value = 'Goodbye';
    }, 2000);

    watch(message, (newValue, previousValue) => {
      console.log('watcher:', newValue, previousValue);
    });
    return { message, reverseMessage, name, reverseMessageComputed };
  },
};
</script>

<style></style>
<!--

<template>
  <h1>Lesson 4 - computed + watchers</h1>
  <section>
    <p>{{ message.split('').reverse().join('') }}</p>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello');

    return { message };
  },
};
</script>

<style></style>

-->
