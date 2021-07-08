import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import CustomIcon from "../components/Icons/CustomIcon.vue";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      icon: {
        component: CustomIcon,
      }
    }
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        anchor: '#8c9eff',
      },
      dark: {
        primary: '#8c9eff',
      },
    },
  },
});
