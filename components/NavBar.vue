<script>
import ConnectionButton from "@/components/Wallets/ConnectionButton";

export default {
  components: {
    ConnectionButton,
  },
  methods: {},
};
</script>

<template>
  <nav
    class="navbar navbar-light bg-light justify-content-between sticky-top opacity-75"
  >
    <span class="navbar-brand font-weight-bold fontsize-30">BBOX</span>
    <ConnectionButton />
  </nav>
</template>
