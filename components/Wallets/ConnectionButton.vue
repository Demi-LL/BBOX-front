<script>
import { mapActions, mapGetters } from "vuex";

import { askWalletPermissionAndReturnAccounts } from "@/api/ethereum";

export default {
  computed: {
    ...mapGetters({
      account: "web3/account",
    }),

    isConnected() {
      return this.account ?? false;
    },
  },
  methods: {
    ...mapActions({
      storeAccount: "web3/storeAccount",
    }),
    async link() {
      if (typeof window.ethereum !== "undefined") {
        try {
          const accounts = await askWalletPermissionAndReturnAccounts();

          // 將 web3 物件儲存到自定義的 plugin 中
          this.$WEB3.setInstance(new this.$Web3(window.ethereum));

          this.storeAccount(accounts[0]);

          console.log(this.$WEB3.instance);
        } catch (error) {
          // User denied account access
          console.error("User denied web3 access", error);
          return;
        }

        console.log(this.account);
      }
      // No web3 provider
      else {
        console.error("No web3 provider detected");
        return;
      }
    },

    unlink() {
      this.storeAccount(undefined);
    },
  },
};
</script>

<template>
  <div>
    <button
      class="btn"
      data-hover="取消連結"
      :class="[account ? 'btn-outline-success' : 'btn-outline-primary']"
      type="button"
      @click="isConnected ? unlink() : link()"
    >
      {{ isConnected ? account : "Connect Wallet" }}
    </button>
  </div>
</template>
