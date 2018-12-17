<template lang="pug">
  section.CandidateNamesArea(@click="doInputFocus")
    h2.CandidateNamesArea_Title 幹事候補者を「幹事候補者名」欄に入力して登録してください

    .CandidateNamesArea_Item-Input
      // i.mdi.mdi-label.mdi-18px
      input.CandidateNamesArea_Add.js-CandidateNamesArea_Add(
        type="text",
        placeholder="幹事候補者名",
        @keydown="doKeydown",
        @blur="doBlur",
      )

    ul.CandidateNamesArea_Items
      li.CandidateNamesArea_Item(v-for="(candidateName, index) in candidateNames")
        span.CandidateNamesArea_Item-View {{ candidateName }}
        a.CandidateNamesArea_Item-Remove(@click="doRemoveName(index)")
</template>

<script>
'use strict'

import * as types from '@/vuex/mutation-types'

export default {
  name: 'CandidateNamesArea',

  computed: {
    candidateNames: {
      get () {
        return this.$store.getters.candidateNames
      }
    }
  },

　updated () {
    const items = [].slice.call(document.body.querySelectorAll('.CandidateNamesArea_Item'))
    const lastItem = items[items.length - 1]

    lastItem.classList.add('animation-Bound')
  },

  methods: {
    doInputFocus (e) {
      if (!e.target.classList.contains('CandidateNamesArea_Item-Remove')) {
        document.querySelector('.js-CandidateNamesArea_Add').focus()
      }
    },

    doKeydown (e) {
      const value = e.target.value

      if (e.keyCode === 13 && value) {
        this.$store.commit(types.ADD_CANDIDATENAMES, e.target.value)
        e.target.value = ''
      }

    },

    doBlur (e) {
      const value = e.target.value

      if (value.length) {
        this.$store.commit(types.ADD_CANDIDATENAMES, value)
        e.target.value = ''
      }
    },

    doAddName (value) {
      this.$store.commit(types.ADD_CANDIDATENAMES, value)
    },

    doRemoveName (index) {
      this.$store.commit(types.REMOVE_CANDIDATENAMES, index)
    }
  }
}
</script>

<style lang="stylus">
  .CandidateNamesArea
    &_Title
      font-size 1.8rem

    &_Items
      // border 1px solid #ffdd57
      // border-radius 4px
      display flex
      flex-wrap wrap
      justify-content flex-start
      // padding 2.4rem 2rem 1.2rem 2rem
      margin-top 2.8rem

    &_Item
      font-size 1.6rem
      display flex
      flex-wrap wrap
      justify-content flex-start
      line-height 1
      margin 0 0.8rem 1.6rem 0.8rem

    /*
    &_Item:nth-last-child(2)
      margin-right 1.6rem
    */

    &_Item-View
      background-color #ff3860
      border-top-right-radius 0
      border-top-left-radius 4px
      border-bottom-right-radius 0
      border-bottom-left-radius 4px
      color #fff
      padding 0.55rem 0.8rem

    &_Item-Remove
      background-color #eee
      border-top-right-radius 4px
      border-top-left-radius 0
      border-bottom-right-radius 4px
      border-bottom-left-radius 0
      padding 0.55rem 1.35rem
      position relative

    &_Item-Remove::before,
    &_Item-Remove::after
      background-color #333
      content ""
      display block
      left: 50%
      position absolute
      top 50%
      transform translateX(-50%) translateY(-50%) rotate(45deg)
      transform-origin center center

    &_Item-Remove::before
      height 0.1rem
      width 50%

    &_Item-Remove::after
      height 50%
      width 0.1rem

    &_Item-Input
      margin-top 1.6rem

    &_Add
      border 2px solid #aaa
      border-width 0 0 2px 0
      // border-radius 4px
      background-color #eee
      border-top-right-radius 4px
      border-top-left-radius 4px
      border-bottom-right-radius 0
      border-bottom-left-radius 0
      font-size 1.6rem
      flex 1
      // margin-left 0.4rem
      padding 1.6rem
      outline 0
      width 100%

    &_Add:focus
      // background-color #ffdd57
      border-bottom-color #ff3860

  .animation-Bound
    animation bound 3s 1 ease-out
    transform-origin 50% 50%
    animation-play-state running

    @keyframes bound
      0%
        transform scale(0.8, 0.8)
      5%
        transform scale(1.6, 1.6)
      10%
        transform scale(1, 1)
      15%
        transform scale(1.2, 1.2)
      20%
        transform scale(1, 1)
      100%
        transform scale(1, 1)
</style>
