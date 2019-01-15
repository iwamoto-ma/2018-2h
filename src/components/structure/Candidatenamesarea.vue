<template lang="pug">
  .Candidatenames
    .field.is-grouped
      .control.is-expanded
        input.input.is-size-4(type="text", placeholder="Input Name", v-model.trim='$store.candidatename', @keypress.enter='addListname(candidateItem)')
      .control
        a.button.is-primary.is-large(@click='addCandidateName') Add Name
    .Candidatenames_list
      .field.is-grouped.is-grouped-multiline
        //- nameset
        .control(v-for='item in nameItem')
          .tags.are-large.has-addons
            .tag.is-link.is-large {{ isCandidateName }}
            a.tag.is-delete.is-large(@click='deleteCandidateName')
</template>

<script>
export default {
  data: () => {
    return this.$store.candidatename
  },
  computed: {
    isCandidateName() {
      return this.$store.getters.isCandidatename;
    }
  },
  methods: {
    // addListname: (newName) => {
    //   this.nameItem.push({
    //     name: newName
    //   });
    //   this.candidateItem = '';
    // },
    addCandidateName(){
      this.$store.dispatch('addName');
    },
    deleteCandidateName(){
      this.$store.dispatch('deleteName');
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
