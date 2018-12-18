<template lang="pug">
  section.st-Manager
    .st-Inner
      .RecommendManager_Head 推薦したい幹事さんを入力欄に入れて登録してください。

      form(@submit.prevent="addName")
        input(type="text" v-model="newName" placeholder="推薦幹事者名" class="InputName")
        input(type="submit" value="登録")
      ul(class="CandidateNameList")
        li(v-for="(name, index) in names" class="CandidateName") {{ name }} さん
          span(@click="delName(index)")
            span(class="DelBtn") ×
</template>

<script>
'use strict'
export default {
  data () {
    return {
      newName: '',
      names: [],
      addName: () => {
        if (document.getElementsByClassName('InputName')[0].value !== "" )  {
          this.names.push(this.newName)
          this.newName = ''
        }
      },
      delName: (index) => {
        this.names.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="stylus">
  .st-Manager
    .st-Inner
      padding 20px

  .RecommendManager_Head
    padding 0 0 10px
    font-size 14px

  .InputName
    font-size 16px

  .CandidateNameList
    margin 10px 0 0

  .CandidateName
    font-size 16px

  .DelBtn
    line-height 1.5rem
    display inline-block
    margin-left 5px
    color #fff
    background-color #ff0561
    width 1.5rem
    height 1.5rem
    text-align center
    border-radius 3px
    cursor pointer

</style>
