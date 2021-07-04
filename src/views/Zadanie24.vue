<template>
  <div class="zad24">
    <h1>Zadanie 24</h1>
    <div class="holder">
      <input type="date" ref="date1" placeholder="Pierwsza data" />
      <input type="date" ref="date2" placeholder="Druga data" />
      <button @click="calculateDays">Oblicz</button>
      <span class="error" ref="error" />
      <span ref="result" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Zadanie24",
  methods: {
    calculateDays() {
      const date1 = this.$refs.date1.value;
      const date2 = this.$refs.date2.value;
      const error = this.$refs.error;
      const result = this.$refs.result;
      result.innerHTML = "";
      error.innerHTML = "";
      if (date1.trim() === "" || date2.trim() === "") {
        error.innerHTML = "Daty nie mogą być puste!";
      } else {
        if (date2 < date1) {
          error.innerHTML = "Druga data musi być większa lub równa pierwszej";
        } else {
          const d2 = new Date(date2);
          const d1 = new Date(date1);
          const res = parseInt((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24));
          result.innerHTML = `Między datami minęło ${res} dni`;
        }
      }
    },
  },
};
</script>
