import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import CustomIcon from "../components/CustomIcon.vue";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      icon: {
        component: CustomIcon,
      }
    }
  }
});
