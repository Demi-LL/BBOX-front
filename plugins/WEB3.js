import Vue from "vue";
import web3 from "web3";
import { ethers } from "ethers";
import contractInfo from "@/contracts/BBox.json";

let eth;
let contract;
let instance;
const hasEthereum = typeof window.ethereum !== "undefined";
const ethereum = window.ethereum;
if (hasEthereum) {
  instance = new web3(ethereum);

  eth = instance.eth;
}

Vue.prototype.$WEB3 = {
  eth,
  contract,
  ethereum,
  instance,
  hasEthereum,
  setContract: function () {
    // ethers.js 版
    // const provider = new ethers.providers.Web3Provider(ethereum);
    // const signer = provider.getSigner();
    // this.contract = new ethers.Contract(
    //   process.env.BBOX_CONTRACT_ADDRESS,
    //   contractInfo.abi,
    //   signer
    // );

    // web3.js 版
    this.contract = new eth.Contract(
      contractInfo.abi,
      process.env.BBOX_CONTRACT_ADDRESS
    );
  },
  setInstance: function (ins) {
    this.instance = ins;
  },
  getCurrentNetworkId: async function () {
    return await this.eth.net.getId();
  },
};
