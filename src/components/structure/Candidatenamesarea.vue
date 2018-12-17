<template lang="pug">
  .Candidatenames
    .field.is-grouped
      .control.is-expanded
        input.input.is-size-4(type="text" placeholder="Input Name")
      .control
        a.button.is-primary.is-large Add Name
    .Candidatenames_list
      .field.is-grouped.is-grouped-multiline
        //- nameset
        .control
          .tags.are-large.has-addons
            a.tag.is-link.is-large komatsu-sa
            a.tag.is-delete.is-large
        .control
          .tags.has-addons
            a.tag.is-link.is-large hoge-hoge
            a.tag.is-delete.is-large
        .control
          .tags.has-addons
            a.tag.is-link.is-large mogemoge
            a.tag.is-delete.is-large
</template>

<script>
export default {
  
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
