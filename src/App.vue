<template>
  <div id="app">
    <h1>Todo application</h1>
    <div class="links">
      <router-link to="/active">Active</router-link>
      <router-link to="/completed">Completed</router-link>
      <router-link to="/">All</router-link>
    </div>
    <hr>
    <router-view />
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a:not(:first-child) {
  margin-left: 20px;
}
a {
  cursor: pointer;
  color: #2c3e50;
  text-decoration: none;
}
</style>