<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col cols="12" class="ma-0 pa-0">
        <v-row class="ma-0 pt-10 pl-10 pb-5">기술 목록</v-row>
        <v-row class="ma-0 pa-0 pl-10 pr-10">
          <v-col
            cols="1"
            class="ma-0 pa-0"
            v-for="(item, i) in craftSkillList"
            :key="i"
          >
            <v-tooltip right min-width="100">
              <template v-slot:activator="{ on, attrs }">
                <button
                  class="button"
                  v-bind="attrs"
                  v-on="on"
                  @click="
                    addToList(
                      item.name,
                      item.icon,
                      item.images,
                      item.cp,
                      item.wait
                    )
                  "
                >
                  <img :src="item.images" style="height: 50px" />
                </button>
              </template>
              <p class="mb-0">
                <b data-html="true">
                  {{ item.name }}
                  <br />
                </b>
              </p>
              <p class="mb-0">{{ item.tooltip }}</p>
            </v-tooltip>
          </v-col>
        </v-row>
        <v-row class="ma-0 pt-10 pl-10 pb-5 pa-5">매크로 제작</v-row>
        <v-row class="ma-0 pl-10 pb-10" justify="space-around">
          <v-col class="ma-0 pa-5" cols="5" id="macro_icons_box">
            <draggable
              :list="selectedList"
              :disabled="!enabled"
              class="list-group"
              ghost-class="ghost"
              :move="checkMove"
              @start="dragging = true"
              @end="dragging = false"
              style="display: flex; flex-wrap: wrap"
            >
              <v-col
                cols="2"
                class="list-group-item"
                v-for="element in selectedList"
                :key="element.name"
                style="padding: 0px"
              >
                <button class="button">
                  <img :src="element.images" style="height: 50px" />
                </button>
                <v-btn
                  class="pa-0"
                  depressed
                  color="orange"
                  width="20"
                  height="20"
                  min-width="20"
                  @click="remove(element)"
                >
                  <v-row align="center" justify="space-around">x</v-row>
                </v-btn>
              </v-col>
            </draggable>
          </v-col>
          <v-col cols="1" class="ma-0 pa-0" id="btn_wrap">
            <v-col cols="12" class="ma-0 pa-0 pb-10">
              <v-col cols="12" class="ma-0 pa-0">cp : {{ totalCP }}</v-col>
            </v-col>
            <v-col cols="12" class="ma-0 pa-0 pb-10">
              <v-btn @click="copyToClipboard()">매크로 복사</v-btn>
            </v-col>
            <v-col cols="12" class="ma-0 pa-0">
              <v-btn @click="clearList()">지우기</v-btn>
            </v-col>
          </v-col>
          <v-col cols="5" class="ma-0 pa-0">
            <div v-for="elem in selectedText" :key="elem.name">
              {{ elem.name }} {{ elem.wait }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
import alchemist from "../variables/alchemist";

export default {
  name: "Alchemist",
  components: {
    draggable,
  },
  data: () => ({
    craftSkillList: alchemist.craftSkillList,
    selectedList: [],
    selectedText: [],
    enabled: true,
    dragging: false,
    totalCP: 0,
  }),
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    },
  },
  methods: {
    addToList(name, id, images, cp, wait) {
      this.selectedList.push({ name, id, images, cp, wait });
      this.totalCP += cp;
      console.log(images);
      this.selectedText = this.selectedList;
    },
    clearList() {
      this.selectedList = [];
      this.selectedText = "";
    },
    checkMove: function (e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
    remove(text) {
      console.log(this.selectedList.indexOf(text));
      var num = this.selectedList.indexOf(text);
      console.log(this.selectedList[num]);
      this.totalCP -= this.selectedList[num].cp;
      this.selectedList.splice(this.selectedList.indexOf(text), 1);
    },
    copyToClipboard() {
      var copyText = [];
      var i;
      for (i = 0; i < this.selectedText.length; i++) {
        copyText.push("/ac " + this.selectedText[i].name + " " + this.selectedText[i].wait);
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
    },
  },
};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
.list-group-item {
  display: flex;
  justify-content: center;
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
#btn_wrap {
  text-align: center;
}
#macro_icons_box {
  border: grey 2px solid;
  border-radius: 1vh;
}
</style>