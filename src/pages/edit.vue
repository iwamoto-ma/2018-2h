<template lang="pug">
  div
    InputName

    router-link(v-if="this.$store.getters.currentTodo.length", to="/result") 幹事とジャンルを決める
</template>

<script>
'use strict'

import InputName from '@/components/main/InputName'

export default {
  components: {
    InputName
  },

  created () {
    this.$store.dispatch('genre', {
      endPoint: '/static/genre_l.json'
    })
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

</style>
