<template lang="pug">
  .wrapper
    StHeader
    .container
      Candidatenamesarea
    StFooter
</template>

<script>
'use strict'

import StHeader from '@/components/structure/Header'
import StFooter from '@/components/structure/Footer'

import Candidatenamesarea from '@/components/public/Candidatenamesarea'

export default {
  components: {
    StHeader,
    StFooter,
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
.container
  padding: 10em 0;
</style>
