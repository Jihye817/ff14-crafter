<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped></v-navigation-drawer>
    <v-app-bar app clipped-left elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Crafter</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "./styles/common.scss";
</style>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    drawer: null
  })
};
</script>
