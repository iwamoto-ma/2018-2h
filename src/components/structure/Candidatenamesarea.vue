<template lang="pug">
  .Candidatenames
    .field.is-grouped
      .control.is-expanded
        input.input.is-size-4(type="text", placeholder="Input Name", v-model='candidateItem', @keypress.enter='addListname(candidateItem)')
      .control
        a.button.is-primary.is-large(@click='addListname(candidateItem)') Add Name
    .Candidatenames_list
      .field.is-grouped.is-grouped-multiline
        //- nameset
        .control(v-for='item in nameItem')
          .tags.are-large.has-addons
            .tag.is-link.is-large {{ item.name }}
            a.tag.is-delete.is-large
</template>

<script>
export default {
  data: () => {
    return {
      nameItem:[
        { name: 'komatsu-sa' },
        { name: 'mogehoge' }
      ],
      candidateItem: ''
    }
  },
  methods: {
    addListname: (newName) => {
      this.nameItem.push({
        name: newName
      });
      this.candidateItem = '';
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
