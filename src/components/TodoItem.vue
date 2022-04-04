<template>
    <li>
        <span v-bind:class="{done: !todo.active}">
            <input type="checkbox" v-on:change="todo.active = !todo.active"
                   v-bind="{checked: !todo.active}">
            <strong>{{ index + 1 }}</strong>
            {{ todo.text }}
        </span>
        <button class="rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number
    }
}
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }
    .rm {
        background: #ff0000;
        color: #fff;
        border-radius: 50%;
        border: 1px solid #ccc;
        font-weight: bold;
    }
    input {
        margin-right: 1rem;
    }
    .done {
        text-decoration: line-through;
    }
</style>