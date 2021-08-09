<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col cols="12">
        <v-row class="pt-10 pl-10 pb-5">Sample List</v-row>
        <v-row class="ma-0 pa-0 pl-5">
          <v-col v-for="(item, i) in craftSkillList" :key="i">
            <v-tooltip right min-width="100">
              <template v-slot:activator="{ on, attrs }">
                <button
                  class="button"
                  v-bind="attrs"
                  v-on="on"
                  @click="addToList(item.text, item.icon, item.images, item.cp)"
                >
                  <img :src="item.images" style="height:50px" />
                </button>
              </template>
              <p class="mb-0">
                <b data-html="true">
                  {{item.text}}
                  <br />
                </b>
              </p>
              <p class="mb-0">{{item.tooltip}}</p>
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
                <button class="button">
                  <img :src="element.images" style="height:50px" />
                </button>
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
            <v-btn @click="changeToText()">test</v-btn>
          </v-col>
          <v-col cols="5">
            <div v-for="elem in selectedText" :key="elem.name">test {{elem.name}}</div>
            <div>cp : {{totalCP}}</div>
            <v-btn @click="copyToClipboard()">copy</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
import shared from "../variables/global";
import alchemist from "../variables/alchemist";

export default {
  name: "Alchemist",
  components: {
    draggable
  },
  data: () => ({
    craftSkillList: alchemist.craftSkillList,
    selectedList: [],
    selectedText: [],
    enabled: true,
    dragging: false,
    totalCP : 0,
  }),
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },
  methods: {
    addToList(name, id, images, cp) {
      this.selectedList.push({ name, id, images, cp});
      this.totalCP += cp
      console.log(images);
    },
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
    changeToText() {
      this.selectedText = this.selectedList;
    },
    remove(text) {
      console.log(this.selectedList.indexOf(text));
      this.totalCP -= this.selectedList.indexOf(text).cp;
      this.selectedList.splice(this.selectedList.indexOf(text), 1);
    },
    copyToClipboard() {
      var copyText = [];
      var i;
      for (i = 0; i < this.selectedText.length; i++) {
        copyText.push(this.selectedText[i].name + " time");
      }
      //복사 위해 textarea 생성
      const element = document.createElement("textarea");
      element.value = copyText.join("\n");
      element.setAttribute("readonly", "");
      element.style.position = "absolute";
      element.style.left = "-9999px"; //화면 깜빡임 방지를 위해 시야 밖에 생성
      document.body.appendChild(element);
      element.select();

      var returnValue = document.execCommand("copy"); //복사
      document.body.removeChild(element); //완료 후 생성된 element 삭제

      if (!returnValue) {
        throw new Error("copied nothing");
      } else {
        alert("복사 완료");
      }
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
.button {
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>