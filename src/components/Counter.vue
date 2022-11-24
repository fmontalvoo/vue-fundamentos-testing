<template>
    <h2>Counter: {{ counter }}<sup>{{ exp }}</sup> = {{ calcSquare }}</h2>
    <div>
        <button class="minus" @click="substract">-</button>
        <button class="plus" v-on:click="add">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: this.start,
        }
    },
    props: {
        start: {
            default: 1,
            type: Number,
        },
        exp: {
            default: 2,
            type: Number,
            validator(value) {
                return (value >= 1)
            }
        }
    },
    methods: {
        add() {
            this.counter += 1
        },
        substract() {
            this.counter -= 1
        },
        square(b = 0, e = 1) {
            if (e <= 1) return b
            return b * this.square(b, e - 1)
        }
    },
    computed: {
        calcSquare() {
            return this.square(this.counter, this.exp)
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