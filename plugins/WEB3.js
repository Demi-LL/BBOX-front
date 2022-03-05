import Vue from "vue";
import web3 from "web3";
import ethers from "ethers";
import contractInfo from "../BBox.json";

let eth;
let contract;
let instance;
const hasEthereum = typeof window.ethereum !== "undefined";
const ethereum = window.ethereum;
if (hasEthereum) {
  instance = new web3(hasEthereum);

  eth = instance.eth;
}

Vue.prototype.$WEB3 = {
  eth,
  contract,
  ethereum,
  instance,
  hasEthereum,
  setInstance: function (ins) {
    this.instance = ins;
  },
  getCurrentNetworkId: async function () {
    return await this.eth.net.getId();
  },
};
