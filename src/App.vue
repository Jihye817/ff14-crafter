<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped></v-navigation-drawer>
    <v-app-bar app clipped-left elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Crafter</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer app v-model="drawer" clipped>
        <v-list-item-group>
          <v-list-item class="ma-0" v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-navigation-drawer>
      <router-view></router-view>
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
    drawer: null,
    items: [{ text: "Craft", icon: "mdi-dog", func: "" }]
  }),
  methods: {
    movePage(text) {
      this.$router.push("/" + text);
    }
  }
};
</script>
