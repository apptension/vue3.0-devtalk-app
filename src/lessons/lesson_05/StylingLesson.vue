<template>
  <h1>Lesson 5 - styling</h1>
  <section>
    <div
      :class="['box', { active: boxASelected }]"
      @click="boxSelected('A')"
    ></div>
    <div
      :class="{ box: true, active: boxBSelected }"
      @click="boxSelected('B')"
    ></div>
    <div
      class="box"
      :class="{ active: boxCSelected }"
      @click="boxSelected('C')"
    ></div>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const boxASelected = ref(false);
    const boxBSelected = ref(false);
    const boxCSelected = ref(false);

    const boxSelected = (box) => {
      if (box === 'A') {
        boxASelected.value = !boxASelected.value;
      } else if (box === 'B') {
        boxBSelected.value = !boxBSelected.value;
      } else if (box === 'C') {
        boxCSelected.value = !boxCSelected.value;
      }
    };
    return { boxASelected, boxBSelected, boxCSelected, boxSelected };
  },
};
</script>

<style scoped>
#styling {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

.box {
  width: calc(100% - 32px);
  height: 100px;
  margin: 16px;
  border: 2px dashed #ccc;
  background: #fff;
  cursor: pointer;
}

.active {
  border-color: red;
  background-color: salmon;
}
</style>

<!--

<template>
  <h1>Lesson 5 - styling</h1>
  <section>
    <div class="box" @click="boxSelected('A')"></div>
    <div class="box" @click="boxSelected('B')"></div>
    <div class="box" @click="boxSelected('C')"></div>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const boxASelected = ref(false);
    const boxBSelected = ref(false);
    const boxCSelected = ref(false);

    const boxSelected = (box) => {
      if (box === 'A') {
        boxASelected.value = !boxASelected.value;
      } else if (box === 'B') {
        boxBSelected.value = !boxBSelected.value;
      } else if (box === 'C') {
        boxCSelected.value = !boxCSelected.value;
      }
    };
    return { boxASelected, boxBSelected, boxCSelected, boxSelected };
  },
};
</script>

<style>
#styling {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

.box {
  width: calc(100% - 32px);
  height: 100px;
  margin: 16px;
  border: 2px dashed #ccc;
  background: #fff;
  cursor: pointer;
}

.active {
  border-color: red;
  background-color: salmon;
}

</style>
-->
