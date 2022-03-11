<script>
import { mapActions, mapGetters } from "vuex";

import {
  mintNFT,
  getBalanceOf,
  getMaxSupply,
  getTotalSupply,
} from "@/abi/BBOX";

export default {
  data() {
    return {
      maxSupply: 0,
      totalSupply: 0,
      balanceOf: 0,
    };
  },
  created() {
    if (!this.$WEB3.hasEthereum) {
      return;
    }

    this.getBBOXMetadata();
  },
  watch: {
    account() {
      this.getBBOXMetadata();
    },
  },
  computed: {
    ...mapGetters({
      account: "web3/account",
      isConnected: "web3/isConnected",
    }),
  },
  methods: {
    ...mapActions({}),

    /**
     * 取得 BBOX 畫面上顯示的基本資料
     */
    getBBOXMetadata() {
      getMaxSupply(this.$WEB3.contract).then((data) => (this.maxSupply = data));
      getTotalSupply(this.$WEB3.contract).then(
        (data) => (this.totalSupply = data)
      );

      if (this.account) {
        getBalanceOf(this.$WEB3.contract, { owner: this.account }).then(
          (data) => (this.balanceOf = data)
        );
      }
    },
    async mint() {
      // TODO: loader
      // TODO: event log
      mintNFT(this.$WEB3.contract, { owner: this.account }).catch((err) => {
        console.log("error:", err);
        alert("發生錯誤，請稍後再試");
      });

      this.$WEB3.contract.events.Transfer().on("data", () => {
        alert("鑄造成功，到 opensea 上看看吧！");
        this.getBBOXMetadata();
      });
    },
  },
};
</script>

<template>
  <div>
    <div class="container p-5 mt-3 shadow-lg bg-light rounded opacity-75">
      <div class="row">
        <h1>
          盲盒 NFT - Blind Box <span class="badge badge-info">v 0.0.1</span>
        </h1>
      </div>
      <hr />
      <div class="row">
        <h2>Mint 資訊</h2>
        <div class="container">
          <div class="row">
            <div class="col">總發行量</div>
            <div class="col">{{ maxSupply || "????" }}</div>
          </div>
          <div class="row">
            <div class="col">已發行量</div>
            <div class="col">{{ totalSupply || "????" }}</div>
          </div>
          <div class="row">
            <div class="col">你已經擁有數量</div>
            <div class="col">{{ balanceOf || "????" }}</div>
          </div>
          <div class="row justify-content-center">
            <button
              class="btn btn-lg btn-primary col-auto"
              :class="{ 'disable-click': !isConnected }"
              type="button"
              :disabled="!isConnected"
              @click="mint()"
            >
              {{ isConnected ? "立刻鑄造" : "連接錢包後才可操作" }}
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <h2>項目成員</h2>
        <Members />
      </div>
      <hr />
      <div class="row">
        <p class="font-weight-bold">沒有測試用 eth 嗎？</p>
        <a href="https://faucets.chain.link/rinkeby" target="_blank"
          >來這裡拿一點吧</a
        >
      </div>
    </div>
  </div>
</template>
