<template>
  <main class="py-4">
    <router-view />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
  name: "index",
};
</script>
