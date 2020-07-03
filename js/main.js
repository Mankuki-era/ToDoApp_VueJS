
(() => {
  'use strict';

  let vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [],
      now: '00:00:00'
    },
    methods: {
      addItem: function() {
        const date = new Date();
        this.now = date.getFullYear() + '/' + String((date.getMonth() + 1)).padStart(2, '0') + '/' + String(date.getDate()).padStart(2, '0') + ' ' + date.getHours() + ':' + String(date.getMinutes()).padStart(2, '0') + ':' + String(date.getSeconds()).padStart(2, '0');
        let item = {
          title: this.newItem,
          isDone: false,
          time: this.now
        }
        this.todos.unshift(item);
        this.newItem = '';
      },
      deleteItem: function(index) {
        if(confirm('削除しますか？')){
          this.todos.splice(index, 1);
        }
      },
      purge: function() {
        if(!confirm('削除しますか？')){
          return;
        }
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function() {
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  });

})();