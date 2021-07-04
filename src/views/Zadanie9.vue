<template>
  <div class="zad9">
    <h1>Zadanie 9</h1>
    <input type="number" ref="radius" min="1" max="100">
    <button @click="drawCircle">Narysuj</button>
    <span class="error" ref="error"/>
    <div class="circle-holder" ref="holder"/>
  </div>
</template>

<script>
export default {
  name: "zadanie9",
  methods: {
    drawCircle() {
      const radius = this.$refs.radius.value;
      const holder = this.$refs.holder;
      const error = this.$refs.error;
      error.innerHTML = "";
      if (radius.trim() === "") {
        error.innerHTML = "Wartość nie może być pusta!";
      } else {
        holder.innerHTML = "";
        let circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.cssText = `width: ${radius * 2}px; height: ${
          radius * 2
        }px`;
        holder.appendChild(circle);
      }
    },
  },
};
</script>
