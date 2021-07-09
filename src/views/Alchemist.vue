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
                  @click="addToList(item.text, item.icon)"
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
            </v-tooltip>
          </v-col>
        </v-row>
        <v-row class="ma-0 pa-5">draggable test</v-row>
        <v-row class="ma-0 pa-5">
          <v-col class="ma-0 pa-0" cols="5">
            <draggable
              :list="selectedList"
              :disabled="!enabled"
              class="list-group"
              ghost-class="ghost"
              :move="checkMove"
              @start="dragging = true"
              @end="dragging = false"
              style="display:flex; flex-wrap: wrap;"
            >
              <div
                class="list-group-item"
                v-for="element in selectedList"
                :key="element.name"
                style="padding: 10px"
              >
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
                <v-btn
                  class="pa-0"
                  depressed
                  color="orange"
                  width="20"
                  height="20"
                  min-width="20"
                  v-bind="attrs"
                  v-on="on"
                  @click="remove(element)"
                >
                  <v-row align="center" justify="space-around">x</v-row>
                </v-btn>
              </div>
            </draggable>
          </v-col>
          <v-col cols="2" align-self="center">
            <v-btn depressed color="white" @click="changeToText()">test</v-btn>
          </v-col>
          <v-col cols="5">
            <div v-for="elem in selectedText" :key="elem.name">test {{elem.name}}</div>
            <v-btn @click="copyToClipboard()">copy</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "Alchemist",
  components: {
    draggable
  },
  data: () => ({
    craftSkillList: [
      { text: "1", icon: "icon" },
      { text: "2", icon: "icon" },
      { text: "3", icon: "icon" }
    ],
    selectedList: [],
    selectedText: [],
    enabled: true,
    dragging: false
  }),
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },
  methods: {
    addToList(name, id) {
      this.selectedList.push({ name, id });
    },
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
    changeToText() {
      this.selectedText = this.selectedList;
    },
    remove(text) {
      console.log(this.selectedList.indexOf(text));
      this.selectedList.splice(this.selectedList.indexOf(text), 1);
    },
    copyToClipboard() {
      var copyText = this.craftSkillList[0].text;
      alert(copyText);
      document.execCommand("copy");
      // alert(copyText.value + "을 복사했습니다.");
    }
  }
};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>