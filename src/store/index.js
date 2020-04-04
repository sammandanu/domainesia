import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    available:[
      {
        id:0,
        dot:".space",
        price:100000
      },
      {
        id:1,
        dot:".net",
        price:100000
      },
      {
        id:2,
        dot:".org",
        price:100000
      }
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
