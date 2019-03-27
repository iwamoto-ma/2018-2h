<template lang="pug">
  .st-Inner
    h2.input-Title 幹事候補生を入力してください
    form.input-Area(@submit.prevent="validateForm")
      .input-Area-Wrap
        input#js-member.input-Area-Member(type="text")
        button.input-Area-Button(type="submit") 追加
      p.input-Area-Error(v-if="this.error") {{ error }}

    table.member-List
      tr.member-List-Item(v-for="(name, index) in names")
        td.member-List-Name {{ name }}
        td.member-List-Button
          button(@click="deleteName(index)") 削除

    div.result-Button(v-show="names.length")
      router-link(to="/result")
        a.result-Button-Href 幹事を決める
</template>

<script>
  export default {
    data: function() {
      return {
        error: '',
      }
    },
    computed: {
      names: function() {
        return this.$store.getters.currentNames;
      }
    },
    methods: {
      validateForm: function() {
        const formValue = document.getElementById('js-member').value
        const storeName = this.$store.getters.currentNames
        if(formValue.length > 0){
          if(storeName.length > 0 && storeName.indexOf(formValue) >= 0){
            this.error = '同一存在が確認されました'
          }else{
            this.$store.commit('ADD_NAME', formValue);
            this.error = ''
          }
        }else{
          this.error = '入力が存在しません'
        }
        document.getElementById('js-member').value = '';
      },
      deleteName: function(index){
        this.$store.commit('DELETE_NAME', index)
        this.error = ''
      }
    }
  }
</script>

<style lang="stylus">

.input-Title
  font-size 20px
  margin-bottom 20px
  text-align center

.input-Area
  text-align center
  overflow hidden
  width: 410px
  margin 0 auto

  &-Wrap
    overflow hidden

  &-Member
    -webkit-border-radius 6px
    -moz-border-radius 6px
    border-radius 6px
    border 2px solid #ccc
    width 320px
    margin-bottom 0
    padding 10px
    float: left

  &-Button
    background-color #ffe2e8
    -webkit-border-radius 6px
    -moz-border-radius 6px
    border-radius 6px
    border 2px solid #ff3860
    color #ff3860
    cursor: pointer
    width 80px
    height 40px
    font-size 14px
    font-weight bold
    float right

    &:hover
      color #fff
      background-color #ff3860

  &-Error
    margin-top 10px
    color #ff3860
    text-align left

  &-Error + &-Wrap
    margin-bottom 0


.member-List
  width 410px
  margin 20px auto 0

  &-Item
    border-bottom 1px solid #ccc
    width 100%

  &-Name
    font-size 16px
    padding  10px 0
    vertical-align middle
    width 300px

  &-Button
    padding  10px 0
    vertical-align middle
    text-align right

    & > button
      background-color #fff
      -webkit-border-radius 6px
      -moz-border-radius 6px
      border-radius 6px
      border 2px solid #ccc
      cursor: pointer
      width 50px
      height 30px
      font-size 12px
      float right

      &:hover
        background-color #ccc
.result-Button
  text-align center
  margin-top 50px
  &-Href
    border: solid 2px #fff
    background #ff3860
    color #fff
    border-radius 5px
    width 300px
    display inline-block
    padding 10px
    text-align center
    font-size 24px
    margin 0 auto
    &:hover
      border: solid 2px #ff3860
      color #ff3860
      background #fff
      transition: all  0.3s ease;
</style>
