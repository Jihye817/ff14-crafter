<template>
  <v-container fluid class="grey lighten-3">
    <v-row>
      <v-col v-for="n in 8" :key="n">
        <v-btn>
          <v-row>
            <v-img
              :src="require('../assets/logo.svg')"
              class="ma-0 pa-0"
              contain
              height="30"
              width="30"
            />test
          </v-row>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Craft"
};
</script>