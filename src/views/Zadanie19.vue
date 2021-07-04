<template>
  <div class="zad19">
    <h1>Zadanie 19</h1>
    <div class="holder">
      <div class="language" v-for="lang in languages" v-bind:key="lang">
        <p>{{ lang }}</p>
      </div>
    </div>
    <div class="options">
      <h3>Dodaj język</h3>
      <input type="text" ref="langAdd" placeholder="Wpisz język">
      <button @click="addLanguage">Dodaj</button>
      <span class="error" ref="langAddError"></span>
      <h3>Usuń język</h3>
      <input type="text" ref="langDel" placeholder="Wpisz język">
      <button @click="delLanguage">Usuń</button>
      <span class="error" ref="langDelError"></span>
      <button class="margin" @click="sortAsc">Sortuj rosnąco</button>
      <button class="margin" @click="sortDesc">Sortuj malejąco</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Zadanie19",
  data: () => {
    return {
      languages: ["PHP", "C#", "JavaScript", "C++", "Python"],
    };
  },
  methods: {
    addLanguage() {
      const language = this.$refs.langAdd.value;
      const error = this.$refs.langAddError;
      error.innerHTML = "";
      if (language.trim() === "") {
        error.innerHTML = "Wartość nie może być pusta!";
      } else {
        if (this.validate(language)) {
          this.languages.push(language);
        } else {
          error.innerHTML = "Wartość jest już w tablicy";
        }
      }
    },
    validate(elem) {
      return this.languages.indexOf(elem) === -1;
    },
    delLanguage() {
      const language = this.$refs.langDel.value;
      const error = this.$refs.langDelError;
      error.innerHTML = "";
      if (language.trim() === "") {
        error.innerHTML = "Wartość nie może być pusta!";
      } else {
        if (this.validate(language)) {
          error.innerHTML = "Tablica nie zawiera takiej wartości";
        } else {
          this.languages = this.languages.filter((value) => {
            return value !== language;
          });
        }
      }
    },
    sortAsc() {
      this.languages = this.languages.sort();
    },
    sortDesc() {
      this.languages = this.languages.sort().reverse();
    },
  },
};
</script>
