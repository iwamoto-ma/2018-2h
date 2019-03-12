<template lang="pug">
  header.st-Header
    .st-Inner
      h1.st-Header_Title スーパーくじ引き
        span.br 幹事さん
      p.st-Header_Description 宴会幹事決定ツール
</template>

<style lang="stylus">
  .st-Header
    background-image linear-gradient(141deg, #ff0561, #ff3860 71%, #ff5257)
    border-bottom 2px solid #eee
    color #fff
    margin-bottom 50px
    padding 4.8rem 2.4rem

    &_Title
      font-size 3.2rem

    &_Description
      font-size 2rem
      margin-top 0.8rem

@media (max-width: 896px)
  .st-Header
    width: 100%
    text-align: center

  .br
    display block

</style>
