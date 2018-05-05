<template>
  <div>
    <index-nav></index-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import indexNav from "../../components/indexNav.vue";

export default {
  name: "home",
  components: {
    indexNav
  }
};
</script>


