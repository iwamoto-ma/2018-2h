<template lang="pug">
  div
    StHeader
    transition(name="slide" mode="out-in")
      router-view
    StFooter
</template>

<script>
'use strict'

import StHeader from '@/components/structure/Header'
import StFooter from '@/components/structure/Footer'


export default {
  components: {
    StHeader,
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

button
  padding 0
  border none
  border-radius 0
  outline none
  background none

input
  padding 0
  border none
  border-radius 0
  outline none
  background none
  color #666
  font-size 16px
  padding 1.5rem 2rem
  -webkit-border-radius 6px
  -moz-border-radius 6px
  border-radius 6px
  border 4px solid #e6e6e6
  width 100%
  margin-bottom 30px

.st-Inner
  margin-left auto
  margin-right auto
  width 128rem

.slide-enter-active
  animation slide-in 200ms ease-out forwards

.slide-leave-active
  animation slide-out 200ms ease-out forwards

@keyframes slide-in
  from
      transform translateY(-40px)
      opacity 0
  to
      transform translateY(0)
      opacity 1

@keyframes slide-out
  from
      transform translateY(0);
      opacity 1
  to
      transform translateY(-40px)
      opacity 0

</style>
