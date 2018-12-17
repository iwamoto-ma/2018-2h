<template lang="pug">
  div
    StHeader
    Candidatenamesarea
</template>

<script>
'use strict'

import StHeader from '@/components/structure/Header'
import Candidatenamesarea from '@/components/structure/Candidatenamesarea'

export default {
  components: {
    StHeader,
    Candidatenamesarea
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

.st-Inner
  margin-left auto
  margin-right auto
  width 128rem
</style>
