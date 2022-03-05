import Vue from "vue";

Vue.prototype.$WEB3 = {
  instance: undefined,
  setInstance: function (ins) {
    this.instance = ins;
  },
};
