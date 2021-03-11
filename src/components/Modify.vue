<template>
  <div>
    <div>
      <ul>
        <li v-for="(count, dish, index) in datapacket" :key="index">
          {{ dish }}: {{ count }}
          <p>
            <input @change="updateDatapacket($event)" :id = "dish" placeholder="0" type="number" and min="0" />
          </p>
        </li>
      </ul>
              <button @click = "updateOrder">Update Order</button>
    </div>
  </div>
</template>

<script>
import database from "../firebase.js";

export default {
  data() {
    return {
      datapacket: {},
      queryId : this.$route.query.id,
    };
  },
  methods: {
    fetchItems() {
      database
        .collection("orders")
        .doc(this.$route.query.id)
        .get()
        .then((snapshot) => {
           this.datapacket = snapshot.data().count;
        });
    },
    updateDatapacket (event) {
        let dish = event.target.getAttribute("id");
        this.datapacket[dish] = parseInt(event.target.value);
    },

    updateOrder() {
      //let newDatapacket = Object.assign({}, this.datapacket);
      database
        .collection("orders")
        .doc(this.$route.query.id)
        .set({
          count: this.datapacket
        })
        .then(() => {
          this.$router.push({ name: "Orders" });
        });
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
  width: 120px;
  height: 30px;
  background-color: #e2a764;
  border-radius: 10px;
  border-width: 1px;
}
</style>