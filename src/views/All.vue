<template>
  <div>
    <h2>All tasks</h2>
    <AddTodo
      @add-todo="addTodo" />
    <hr>
    <TodoList 
      v-bind:todos="todos"
      @remove-todo="removeTodo" />
  </div>
</template>

<script>

import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
export default {
  name: 'App',
  components: {
    TodoList, AddTodo
  },
  mounted() {
    fetch('https://my-json-server.typicode.com/falk20/demo/todos')
      .then(response => response.json())
      .then(json => {
        this.todos = json
      })
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  },
  data() {
    return {
      todos: []
    }
  }
}
</script>