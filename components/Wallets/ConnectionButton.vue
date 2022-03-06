<script>
import { mapActions, mapGetters } from "vuex";

import { askWalletPermissionAndReturnAccounts } from "@/api/eth";

export default {
  computed: {
    ...mapGetters({
      account: "web3/account",
      isConnected: "web3/isConnected",
    }),
  },
  methods: {
    ...mapActions({
      storeAccount: "web3/storeAccount",
    }),
    async link() {
      if (this.$WEB3.hasEthereum) {
        try {
          const accounts = await askWalletPermissionAndReturnAccounts(
            this.$WEB3.ethereum
          );

          this.storeAccount(accounts[0]);
        } catch (error) {
          // User denied account access
          console.error("User denied web3 access", error);
        }
      }
      // No web3 provider
      else {
        console.error(
          "沒有安裝狐狸錢包等支援 web 3.0 的擴充套件，請安裝後再使用"
        );
      }
    },

    unlink() {
      if (confirm("確定要取消連結嗎 ?")) {
        this.storeAccount(undefined);

        window.location.reload(true);
      }
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
