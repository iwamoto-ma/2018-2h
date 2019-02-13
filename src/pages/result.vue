<template lang="pug">
  .st-Inner
    h1
      | 今回の幹事は{{this.result}}さん
      br
      | ジャンルは{{this.resultGenre}}

    router-link(to="/") Go to TOP
</template>

<script>
'use strict'

const shuffle = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default {
  computed: {
    result () {
      return this.$store.getters.currentTodo.length ? shuffle(this.$store.getters.currentTodo) : null
    },

    resultGenre () {
      return this.$store.getters.genre ? shuffle(this.$store.getters.genre) : null
    }
  },

  created () {
    if (!this.$store.getters.currentTodo.length) {
      this.$router.push({ path: '/'})
    }
  }
}
</script>

<style>
</style>
