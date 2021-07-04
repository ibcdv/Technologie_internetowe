<template>
  <div class="zad1">
    <h1>Zadanie 1</h1>
    <div class="holder">
      <div class="button-holder">
        <button @click="konsola">console.log</button>
        <button @click="alercik">alert</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Zadanie1",
  data: () => {
    return {
      message: "Zadanie 1",
    };
  },
  methods: {
    konsola() {
      console.log(this.message);
    },
    alercik() {
      alert(this.message);
    },
  },
};
</script>
