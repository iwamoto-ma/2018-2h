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
        let max = this.$store.getters.currentCategory.category_s.length;
        let min = 1;
        const resultRange = Math.floor(Math.random() * (max - min + 1));
        return this.$store.getters.currentCategory.category_s[resultRange].category_s_name;
      }
    }
  }
</script>

<style lang="stylus">

  .result
    background url('/static/izakaya_back.png') center bottom no-repeat
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

@media (max-width: 600px)
  .result
    background-image url('/static/izakaya_back.png')
    background-position center bottom
    background-background-repeat no-repeat
    background-size 90%

  .st-Result
    padding 20px 20px 10px
    width: 90%

    &_Text
      font-size 18px
      margin-bottom 10px


</style>