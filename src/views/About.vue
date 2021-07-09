<template>
  <v-col cols="12">
    <v-row>
      {{tes}}
      {{list[0].num}}
    </v-row>
  </v-col>
</template>

<script>
import shared from '../variables/global'
export default {
  name: 'About',
  data: () => ({
    te : "test",
    tes : shared.message,
    list : shared.testList2
  })
  
}
</script>