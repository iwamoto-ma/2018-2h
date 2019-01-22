<template lang="pug">
  div.result
    .st-Result
      p.st-Result_Text 今回の幹事は 
        span.st-Result_Text-Red {{ resultName }}
        |  さん。
      p.st-Result_Text ジャンルは 
        span.st-Result_Text-Red {{ resultCategory }}
        |  です。

    .back
      router-link(to="/") 戻る

</template>

<script>

  export default {
    data: function(){
      return {
      }
    },
    computed: {
      resultName: function() {
        let max = this.$store.getters.currentTodo.length;
        let min = 1;
        const resultRange = Math.floor(Math.random() * (max - min + 1));
        return this.$store.getters.currentTodo[resultRange];
      },
      resultCategory: function() {
        let max = this.$store.getters.currentCategory.length;
        let min = 1;
        const resultRange = Math.floor(Math.random() * (max - min + 1));
        return this.$store.getters.currentCategory[resultRange].category;
      }
    }
  }
</script>

<style lang="stylus">

  .result
    background url('../../assets/izakaya01.png') center bottom no-repeat
    padding-bottom: 150px

  .st-Result
    background-color #fbffda
    -webkit-border-radius 6px
    -moz-border-radius 6px
    border-radius 6px
    border 5px solid #ff0561
    text-align center
    overflow hidden
    padding 40px 40px 20px
    width: 50%
    margin 0 auto 50px

    &_Text
      font-size 30px
      margin-bottom 20px

      &-Red
        color #ff0561
        font-weight: bold

  .back
    font-size 20px
    text-align center
    overflow hidden
    margin 0 auto

</style>