<template lang="pug">
  .st-Inner
    h2.input-Title 参加メンバーを入力してください
    form.input-Area(v-on:submit.prevent="addMemberText")
      input#js-member.input-Area-Member(type="text",　ref="comment")
      button.input-Area-Button(type="submit") 追加

    table.member-List(v-show="members.length > 0")
      tr.member-List-Item(v-for="(member, index) in members" v-bind:key="member")
        td.member-List-Name {{ member }}
        td.member-List-Button
          button(@click="deleteMemberText(index)") 削除

    .result-Button(v-show="members.length > 0")
      router-link(to="/result") 幹事を決める

</template>

<script>

  var STORAGE_KEY = 'todos-vuejs-demo'
  var memberStorage = {
    fetch: function() {
      var storageMembers = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || '[]'
      )
      return storageMembers
    },
    save: function(storageMembers) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(storageMembers))
    }
  }

  export default {
    computed: {
      members: function() {
        return this.$store.getters.currentMember;
      }
    },
    created() {
      // インスタンス作成時に自動的に fetch() する
      this.$store.state.members = memberStorage.fetch()
    },
    watch: {
      members: {
        // 引数はウォッチしているプロパティの変更後の値
        handler: function(members) {
          memberStorage.save(members)
        },
        // deep オプションでネストしているデータも監視
        deep: true
      }
    },
    methods: {
      addMemberText: function(){
        var text = document.getElementById('js-member').value;
        if (text.match(/\S/g)){
          this.$store.commit('ADD_MEMBER', text);
          document.getElementById('js-member').value = '';
        } else {
          alert('名前を入力してください');
        }
      },
      deleteMemberText: function(index){
        this.$store.commit('DELETE_MEMBER', index);
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

  &-Member
    -webkit-border-radius 6px
    -moz-border-radius 6px
    border-radius 6px
    border 2px solid #ccc
    width 320px
    padding 10px
    float: left

  &-Button
    background-color #ffe2e8
    -webkit-border-radius 6px
    -moz-border-radius 6px
    border-radius 6px
    border 2px solid #ff3860
    color #ff3860
    cursor pointer
    width 80px
    height 40px
    font-size 14px
    font-weight bold
    float right

    &:hover
      color #fff
      background-color #ff3860

@media (max-width: 600px)
  .input-Area
    margin-bottom 40px
    width 100%

    &-Member
      width 85%
      float none

    &-Button
      width 85%
      float none

.member-List
  width 500px
  margin 0 auto 70px

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

@media (max-width: 600px)
  .member-List
    width 85%

.result
  &-Button
    background-image linear-gradient(#2f9701, #287e02)
    -webkit-border-radius 6px
    -moz-border-radius 6px
    border-radius 6px
    border 2px solid #287e02
    color #fff
    cursor pointer
    width 500px
    height 60px
    font-size 24px
    font-weight bold
    text-align center
    margin 0 auto 120px
    line-height 2.4

    &:hover
      background-image linear-gradient(#287e02, #2f9701)

    > a
      color #fff
      display block

@media (max-width: 600px)
  .result
    &-Button
      width 85%

</style>