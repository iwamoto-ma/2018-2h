<template lang="pug">
  section.st-Manager
    .st-Inner
      .RecommendManager_Head 推薦したい幹事さんを入力欄に入れて登録してください。

      form(@submit.prevent="addName" class="AddNameForm")
        input(type="text" v-model="newName" placeholder="推薦幹事者名" class="InputName")
        input(type="submit" value="登録" class="ResistorBtn")
      ul(class="CandidateNameList")
        li(v-for="(name, index) in names" class="CandidateName") {{ name }} さん
          span(@click="delName(index)" class="DelBtn") ×
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

  .AddNameForm
    display: flex;
    align-items: center;

  .InputName
    display inline-block
    font-size 16px
    vertical-align middle

  .ResistorBtn
    display inline-block
    margin-left 8px
    background-color #ff0561
    color #fff
    font-size 10px
    font-weight bold
    border-radius 3px
    vertical-align middle

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
