<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col cols="12">
        <v-row class="pt-10 pl-10 pb-5">Sample List</v-row>
        <v-row class="ma-0 pa-0 pl-5">
          <v-col v-for="(item, i) in craftSkillList" :key="i">
            <v-tooltip right min-width="100">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  depressed
                  color="white"
                  width="50"
                  height="50"
                  min-width="50"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-row align="center" justify="space-around">
                    <v-img src="../assets/logo.png" width="50" height="50" contain></v-img>
                  </v-row>
                </v-btn>
              </template>
              <p class="mb-0">
                <b data-html="true">
                  tooltip
                  <br />tooltiptooltiptooltip
                </b>
              </p>
              <p class="mb-0">tooltip2</p>
              <!-- <span>{{item.text}}</span> -->
            </v-tooltip>
          </v-col>
        </v-row>
        <v-row class="pa-10">test</v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    craftSkillList: [
      { text: "1", icon: "icon" },
      { text: "2", icon: "icon" },
      { text: "3", icon: "icon" }
    ]
  })
};
</script>