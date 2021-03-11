<template>
  <div>
    <button type="button" class="minus" @click="decrementCounter">-</button>
    <label> {{ counter }} </label>
    <button type="button" class="plus" @click="incrementCounter">+</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      if (this.counter < 10) {
        this.counter++;
      } else {
        alert("You cannot buy more than 10 items");
      }
      this.$emit("counter", this.item, this.counter);
    },
    decrementCounter() {
      if (this.counter > 0) {
        this.counter--;
      }
      this.$emit("counter", this.item, this.counter);
    },
  },
};
</script>

<style scoped>
label {
  height: 34px;
  width: 100px;
  text-align: center;
  font-size: 26px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
}

.minus,
.plus {
  width: 34px;
  height: 34px;
  background: #e2a764;
  border-radius: 4px;
  padding: 8px 5px 8px 5px;
  border: 1px solid #ddd;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  outline: 0;
}
</style>