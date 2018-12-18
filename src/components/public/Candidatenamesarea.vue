<template lang="pug">
  section.CandidateNamesArea
    h2.CandidateNamesArea-title 幹事候補生を列記せよ
    .field.has-addons
      .control.has-icons-left.has-icons-right
        input.input.CandidateNamesArea-input(type='text' placeholder='入力')
      .control
        button.button.CandidateNamesArea-button(@click='nameAddFunc') 追加
</template>
<script>
export default {
  methods: {
    nameAddFunc() {
      console.log(this.$store)
      this.$store.dispatch('nameAdd')
    }
  }
}
</script>
<style lang="stylus">
  .CandidateNamesArea
    &-title,&-button,&-input
      font-size 1.7em
    &-title
      margin-bottom .5em
    &-button
      background-image linear-gradient(141deg, #ff0561, #ff3860 71%, #ff5257)
      color #fff
      padding 0 3em
      &:hover
        color #fff
        opacity .7
    &-input
      min-width 50em
</style>
