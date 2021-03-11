<template>
  <div class="basket">
    <div class="menu">
      <ul>
        <h2>Menu:</h2>
        <li v-for="item in itemsSelected" :key="item[0]">
          <p :style="{ fontSize: '25px' }">
            {{ item[0] + " x " + item[1] }}
          </p>
        </li>
      </ul>
    </div>

    <div class="total">
      <button
        :style="{ 'background-color': '#e2a764' }"
        @click="findTotal(), sendOrder()"
      >
        Calculate Total
      </button>
      <p v-show="showTotals">{{ subTotal }}</p>
      <p v-show="showTotals">{{ grandTotal }}</p>
    </div>
  </div>
</template>

<script>
import database from "../firebase.js";

export default {
  props: {
    itemsSelected: {
      type: Array,
    },
  },
  data() {
    return {
      total: 0,
      showTotals: false,
    };
  },
  methods: {
    findTotal() {
      this.total = 0;
      this.showTotals = true;
      for (let i = 0; i < this.itemsSelected.length; i++) {
        const curr_item = this.itemsSelected[i];
        const item_count = curr_item[1];
        const item_price = curr_item[2];
        this.total += item_count * item_price;
      }
    },
    sendOrder() {
      var obj = {};
      for (let i = 0; i < this.itemsSelected.length; i++) {
        const curr_item = this.itemsSelected[i];
        obj[curr_item[0]] = curr_item[1];
      }
      database
        .collection("orders")
        .add({
          count: obj,
        })
        .then(() => {
          location.reload();
        });
    },
  },
  computed: {
    subTotal() {
      return "Subtotal: $" + this.total;
    },
    grandTotal() {
      return "Grand Total: $" + Math.round(this.total * 1.07 * 100) / 100;
    },
  },
};
</script>

<style scoped>
.menu {
  float: left;
}

.total {
  float: left;
  margin-left: 350px;
}

.total > * {
  font-size: 20px;
}
</style>