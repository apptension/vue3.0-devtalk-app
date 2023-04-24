<template>
  <h1>Lesson 7 - Dynamic components</h1>
  <section>
    <label><input type="radio" v-model="currentTab" value="CompA" /> A</label>
    <label><input type="radio" v-model="currentTab" value="CompB" /> B</label>
    <!-- <template v-if="currentTab === 'CompA'">
      <CompA />
    </template>
    <template v-else-if="currentTab === 'CompB'">
      <CompB />
    </template> -->
    <keep-alive>
      <component :is="currentTab"></component>
    </keep-alive>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity';
import CompA from './CompA.vue';
import CompB from './CompB.vue';

export default {
  components: { CompA, CompB },
  setup() {
    const currentTab = ref('CompA');
    return {
      currentTab,
    };
  },
};
</script>

<!--

<template>
  <h1>Lesson 7 - Dynamic components</h1>
  <section>
    <label><input type="radio" v-model="currentTab" value="CompA" /> A</label>
    <label><input type="radio" v-model="currentTab" value="CompB" /> B</label>
    <template v-if="currentTab === 'CompA'">
      <CompA />
    </template>
    <template v-else-if="currentTab === 'CompB'">
      <CompB />
    </template>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity';
import CompA from './CompA.vue';
import CompB from './CompB.vue';

export default {
  components: { CompA, CompB },
  setup() {
    const currentTab = ref('CompA');
    return {
      currentTab,
    };
  },
};
</script>

-->
