<template>
    <h2>Counter: {{ counter }}<sup>2</sup> = {{ exp }}</h2>
    <div>
        <button class="minus" @click="substract">-</button>
        <button class="plus" v-on:click="add">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: this.count,
        }
    },
    props: {
        count: {
            default: 1
        }
    },
    methods: {
        add() {
            this.counter += 1
        },
        substract() {
            this.counter -= 1
        }
    },
    computed: {
        exp() {
            return this.counter * this.counter
        }
    }
}
</script>

<style>
.minus {
    margin: 5px;
    width: 30px;
    height: 30px;
    border-width: 1;
    border-radius: 5px;
    color: aliceblue;
    border-color: crimson;
    background-color: crimson;
}

.plus {
    margin: 5px;
    width: 30px;
    height: 30px;
    border-width: 1;
    border-radius: 5px;
    color: aliceblue;
    border-color: green;
    background-color: green;
}
</style>