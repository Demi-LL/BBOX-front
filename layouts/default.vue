<script>
export default {
  created() {
    this.$WEB3.setContract();
  },
};
</script>

<template>
  <div>
    <NavBar />
    <Nuxt />
  </div>
</template>
