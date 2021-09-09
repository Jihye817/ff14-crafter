<template>
  <v-container fluid class="ma-0 pa-0" id="total_container">
    <v-row class="ma-0 pa-0">
      <v-col align="center" v-for="(item, i) in craftJobList" :key="i">
        <v-btn @click="changePage(item.page)" depressed color="primary" width="80%">
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
    Alchemist: () => import("../views/Alchemist"),
    Carpenter: () => import("../views/Alchemist")
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
#total_container {
  height: 85vh;
}
.btn {
  height: 2.5vh;
  width: 2.5vh;
  background-size: cover;
}
</style>