<template lang="pug">
  .st-Inner
    h2.input-Title 参加メンバーを入力してください
    form.input-Area(v-on:submit.prevent="addTodoText")
      input#js-member.input-Area-Member(type="text",　ref="comment")
      button.input-Area-Button(type="submit") 追加

    table.member-List
      tr.member-List-Item(v-for="(todo, index) in todos" v-bind:key="todo")
        td.member-List-Name {{ todo }}
        td.member-List-Button
          button(@click="deleteTodoText(index)") 削除

</template>

<script>

  var STORAGE_KEY = 'todos-vuejs-demo'
  var todoStorage = {
    fetch: function() {
      var storageTodos = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || '[]'
      )
      return storageTodos
    },
    save: function(storageTodos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(storageTodos))
    }
  }

  export default {
    computed: {
      todos: function() {
        return this.$store.getters.currentTodo;
      }
    },
    created() {
      // インスタンス作成時に自動的に fetch() する
      this.$store.state.todos = todoStorage.fetch()
    },
    watch: {
      todos: {
        // 引数はウォッチしているプロパティの変更後の値
        handler: function(todos) {
          todoStorage.save(todos)
        },
        // deep オプションでネストしているデータも監視
        deep: true
      }
    },
    methods: {
      addTodoText: function(){
        var text = document.getElementById('js-member').value;
        this.$store.commit('ADD_TODO', text);
        document.getElementById('js-member').value = '';
      },
      deleteTodoText: function(index){
        this.$store.commit('DELETE_TODO', index);
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
    cursor: pointer
    width 80px
    height 40px
    font-size 14px
    font-weight bold
    float right

    &:hover
      color #fff
      background-color #ff3860


.member-List
  width 500px
  margin 0 auto

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

</style>