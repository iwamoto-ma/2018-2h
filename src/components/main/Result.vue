<template lang="pug">
  div
    p {{ disp }}
</template>
<script>
export default {
  data: function() {
    return {
      disp: this.$store.getters.currentNames
    }
  },

}
</script>
