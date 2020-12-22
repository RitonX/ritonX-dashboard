<template>
  <div>
    <Header />
    <hr />
    <img width="30%" height="auto" src="../../images/logoRitonx.png" alt="" />
    <h1>Home Component...</h1>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "home",
  components: {
    Header,
  },
};
</script>
