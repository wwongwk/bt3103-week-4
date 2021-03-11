<template>
  <div>
    <div class="navbar">
      <nav>
        <h2 class="storeTitle">Wei Kang's Stall</h2>
        <ul>
          <li><router-link to="/" exact>Home</router-link></li>
          <li><router-link to="/orders" exact>Orders</router-link></li>
          <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
        </ul>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.storeTitle {
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 50px;
  color: white;
  background: #7a3636;
  text-align: center;
  display: block;
}
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
</style>