<template lang="pug">
  .st-Inner
    h2.input-Title 参加メンバーを入力してください
    form.input-Area(v-on:submit.prevent="doAdd")
      input.input-Area-Member(type="text",　ref="comment")
      button.input-Area-Button(type="submit") 追加

    table.member-List
      tr.member-List-Item(v-for="item in todos" :key="item.id")
        td.member-List-Name {{ item.comment }}
        td.member-List-Button
          button(v-on:click="doRemove(item)") 削除

</template>


<script>
'use strict'

var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

export default {
  name: 'InputName',
	data: function() {
		return {
			todos: []
		};
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
  created() {
    // インスタンス作成時に自動的に fetch() する
    this.todos = todoStorage.fetch()
  },
  methods: {
    // ToDo 追加の処理
    doAdd: function(event, value) {
      // ref で名前を付けておいた要素を参照
      var comment = this.$refs.comment
      // 入力がなければ何もしないで return
      if (!comment.value.length) {
        return
      }
      // { コメント }
      // というオブジェクトを現在の todos リストへ push
      this.todos.push({
        comment: comment.value,
      })
      // フォーム要素を空にする
      comment.value = ''
    },
    // 削除の処理
    doRemove: function(item) {
      var index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
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

