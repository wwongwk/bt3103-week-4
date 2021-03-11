<template>
  <div class="orders">
    <div class="menu">
      <ul>
        <li v-for="order in orders" :key="order[0]">
          <div v-for="(count, dish) in order[1].count" :key="dish">
            {{ dish }}: {{ count }}
          </div>
          <button @click="deleteItem($event)" :id="order[0]">Delete</button>
          <button @click="route($event)" :id="order[0]">Modify</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import database from "../firebase.js";

export default {
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    fetchItems() {
      database
        .collection("orders")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const id = doc.id;
            const order = doc.data();
            this.orders.push([id, order]);
          });
        });
    },
    deleteItem(event) {
      let doc_id = event.target.getAttribute("id");
      database
        .collection("orders")
        .doc(doc_id)
        .delete()
        .then(() => {
          location.reload();
        });
    },
    route(event) {
      let doc_id = event.target.getAttribute("id");
      this.$router.push({ name: "Modify", query: { id: doc_id } });
    },
  },
  created() {
    this.fetchItems();
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

button {
  width: 65px;
  height: 30px;
  background-color: #e2a764;
  border-radius: 10px;
  border-width: 1px;
}
</style>
