<template>
  <div id="app">
    <h1>Todo application</h1>
    <hr>
    <TodoList v-bind:todos="todos" />
  </div>
</template>

<script>

import TodoList from '@/components/TodoList.vue'
export default {
  name: 'App',
  components: {
    TodoList
  },
  data() {
    return {
      todos: [
        {id: 1, title: 'Buy some milk', completed: false},
        {id: 2, title: 'Finish homework', completed: false},
        {id: 3, title: 'Pay all taxes', completed: false}
      ]
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
</style>
