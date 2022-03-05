<script>
import { mapActions, mapGetters } from "vuex";

import {} from "@/api/ethereum";

export default {
  data() {
    return {
      totalSupply: 0,
    };
  },
  created() {
    if (!this.$WEB3.hasEthereum || !this.account) {
      return;
    }
  },
  computed: {
    ...mapGetters({
      account: "web3/account",
      isConnected: "web3/isConnected",
    }),
  },
  methods: {
    ...mapActions({}),
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
          <div class="row">haha</div>
          <div class="row justify-content-center">
            <button
              class="btn btn-lg btn-primary col-auto"
              :class="{ 'disable-click': !isConnected }"
              type="button"
              :disabled="!isConnected"
            >
              {{ isConnected ? "鑄造 NFT" : "連接錢包後才可操作" }}
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <h2>項目成員</h2>
        <Members />
      </div>
    </div>
  </div>
</template>
