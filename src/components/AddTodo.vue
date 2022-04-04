<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="text">
        <button type="submit">Add task</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.text.trim) {
                const newTodo = {
                    id: Date.now(),
                    text: this.text,
                    active: true
                }
                this.$emit('add-todo', newTodo)
                this.text = ''
            }
        }
    }
}
</script>

<style scoped>
    form {
        justify-content: center;
        display: flex;
    }
    input {
        width: 400px;
    }
</style>