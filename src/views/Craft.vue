<template>
  <v-container fluid class="grey ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col align="center" v-for="(item, i) in craftJobList" :key="i">
        <v-btn @click="changePage(item.text)" depressed color="primary" width="80%">
          <v-row align="center" justify="space-around">
            <v-icon>${{item.icon}}</v-icon>
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
export default {
  name: "Craft",
  components: {
    'First': () => import('../views/Alchemist'),
  },
  data: () => ({
    craftJobList: [
      { text: "First", icon: "icon" },
      { text: "two", icon: "icon" },
      { text: "three", icon: "icon" },
      { text: "four", icon: "icon" },
      { text: "five", icon: "icon" },
      { text: "six", icon: "icon" },
      { text: "seven", icon: "icon" },
      { text: "eight", icon: "icon" }
    ],
    activePage: '',
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
  },
};
</script>