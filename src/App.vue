<template lang="pug">
  .wrapper
    StHeader

    main.st-Main
      CandidateNamesArea

    StFooter
</template>

<script>
'use strict'

import StHeader from '@/components/structure/Header'
import StFooter from '@/components/structure/Footer'

import CandidateNamesArea from '@/components/namespace/CandidateNamesArea'

export default {
  components: {
    StHeader,
    CandidateNamesArea,
    StFooter
  }
}
</script>

<style lang="stylus">
html
  color #333
  font-size 62.5%

body
  font-family "M PLUS 1p"
  font-size 1.3rem

.st-Main
  margin-top 3.2rem
  margin-bottom 3.2rem

.st-Main,
.st-Inner
  margin-left auto
  margin-right auto
  max-width 128rem
</style>
