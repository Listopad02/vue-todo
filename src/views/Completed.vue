<template>
  <div>
    <h2>Completed tasks</h2>
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
        const result = []
        for (let i in json) {
            if(!json[i].active) {
                result.push(json[i])
                this.todos = result
            }
        }
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