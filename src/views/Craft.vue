<template>
  <v-container fluid class="grey ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col align="center" v-for="(item, i) in craftJobList" :key="i">
        <v-btn @click="changePage(item.text)" depressed color="primary" width="80%">
          <v-row align="center" justify="space-around">
            <img :src="item.image" class="btn" />
            {{item.text}}
          </v-row>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <component :is="Pages"></component>
    </v-row>
  </v-container>
</template>

<script>
import shared from "../variables/global";

export default {
  name: "Craft",
  components: {
    First: () => import("../views/Alchemist")
  },
  data: () => ({
    craftJobList: shared.craftJobList,
    activePage: ""
  }),
  methods: {
    changePage(pagename) {
      this.activePage = pagename;
    }
  },
  computed: {
    Pages() {
      return this.activePage;
    }
  }
};
</script>

<style scoped>
.btn {
  height: 15px;
  width: 15px;
  background-size: cover;
}
</style>