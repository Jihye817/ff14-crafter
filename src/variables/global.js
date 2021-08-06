const list = [
  { num: 3 }, { num: 4 }
],

  shared = {
    message: "my global message",
    testList: [{ num: 1 }, { num: 2 }],
    testList2: list,
    craftJobList: [
      { text: "First", icon: "icon", image: require("../assets/logo.png") },
      { text: "two", icon: "icon", image: require("../assets/logo.png") },
      { text: "three", icon: "icon", image: require("../assets/logo.png") },
      { text: "four", icon: "icon", image: require("../assets/logo.png") },
      { text: "five", icon: "icon", image: require("../assets/logo.png") },
      { text: "six", icon: "icon", image: require("../assets/logo.png") },
      { text: "seven", icon: "icon", image: require("../assets/logo.png") },
      { text: "eight", icon: "icon", image: require("../assets/logo.png") }
    ],
    craftSkillList: [
      {
        text: "1",
        icon: "icon",
        tooltip: "tooltip1",
        images: require("../assets/logo.png")
      },
      {
        text: "2",
        icon: "icon",
        tooltip: "tooltip2",
        images: require("../assets/logo.png")
      },
      {
        text: "3",
        icon: "icon",
        tooltip: "tooltip3",
        images: require("../assets/logo.png")
      }
    ],
  }

export default shared