<template lang="pug">
  .Candidatenames
    .field.is-grouped
      .control.is-expanded
        input.input.is-size-4(type="text", placeholder="Input Name", @keypress.enter='submitName')
      //- .control
      //-   a.button.is-primary.is-large(@click='addCandidateName') Add Name
    .Candidatenames_list
      .field.is-grouped.is-grouped-multiline
        //- nameset
        .control(v-for='(item, index) in isCandidateName')
          .tags.are-large.has-addons
            .tag.is-link.is-large {{ item }}
            a.tag.is-delete.is-large(@click='deleteCandidateName(index)')
</template>

<script>
export default {
  computed: {
    isCandidateName() {
      return this.$store.getters.isCandidatename
    }
  },
  methods: {
    submitName(e) {
      const value = e.target.value
      this.$store.dispatch('addName', value)
      e.target.value = ''
    },
    // addCandidateName(val){
    //   this.$store.dispatch('addName', val)
    // },
    deleteCandidateName(index){
      console.log(index)
      this.$store.dispatch('deleteName', index)
    }
  }
}
</script>


<style lang="stylus">
  .Candidatenames
    padding: 24px 20px;
  .input
    padding: 20px;
  .control
    .button
      padding: 20px;
</style>
