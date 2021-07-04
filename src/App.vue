<template>
  <div id="app">
    <div class="wrapper">
      <div class="sidebar">
        <router-link to="/zadanie1" tag="h3"
          >Technologie internetowe</router-link
        >
        <ul>
          <li>
            <router-link
              to="/zadanie1"
              tag="li"
              v-slot="{ href, route, navigate, isActive }"
            >
              <a
                :class="[isActive && 'active']"
                :href="href"
                @click="navigate"
                >{{ route.name }}</a
              >
            </router-link>
          </li>
          <li>
            <router-link
              to="/zadanie9"
              tag="li"
              v-slot="{ href, route, navigate, isActive }"
            >
              <a
                :class="[isActive && 'active']"
                :href="href"
                @click="navigate"
                >{{ route.name }}</a
              >
            </router-link>
          </li>
          <li>
            <router-link
              to="/zadanie19"
              tag="li"
              v-slot="{ href, route, navigate, isActive }"
            >
              <a
                :class="[isActive && 'active']"
                :href="href"
                @click="navigate"
                >{{ route.name }}</a
              >
            </router-link>
          </li>
          <li>
            <router-link
              to="/zadanie24"
              tag="li"
              v-slot="{ href, route, navigate, isActive }"
            >
              <a
                :class="[isActive && 'active']"
                :href="href"
                @click="navigate"
                >{{ route.name }}</a
              >
            </router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/main";
</style>
