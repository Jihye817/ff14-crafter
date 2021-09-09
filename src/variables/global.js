const list = [
  { num: 3 }, { num: 4 }
],

  shared = {
    message: "my global message",
    testList: [{ num: 1 }, { num: 2 }],
    testList2: list,
    craftJobList: [
      { text: "carpenter", icon: "icon", image: require("../assets/carpenter.png"), page: "alchemist" },
      { text: "two", icon: "icon", image: require("../assets/blacksmith.png") },
      { text: "three", icon: "icon", image: require("../assets/armorer.png") },
      { text: "four", icon: "icon", image: require("../assets/goldsmith.png") },
      { text: "five", icon: "icon", image: require("../assets/leatherworker.png") },
      { text: "six", icon: "icon", image: require("../assets/weaver.png") },
      { text: "alchemist", icon: "icon", image: require("../assets/alchemist.png"), page: "alchemist" },
      { text: "eight", icon: "icon", image: require("../assets/culinarian.png") }
    ],
    craftSkillList: [
      {
        text: "1",
        icon: "icon",
        tooltip: "tooltip1",
        cp: 0,
        images: require("../assets/logo.png")
      },
      {
        text: "2",
        icon: "icon",
        tooltip: "tooltip2",
        cp: 0,
        images: require("../assets/logo.png")
      },
      {
        text: "3",
        icon: "icon",
        tooltip: "tooltip3",
        cp: 0,
        images: require("../assets/logo.png")
      }
    ],
  }

export default shared