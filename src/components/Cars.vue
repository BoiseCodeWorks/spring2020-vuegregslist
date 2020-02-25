<template>
  <div class="cars row">
    <!-- NOTE Props are data passed from parent to child component -->
    <car
      v-for="(carObj, index) in cars"
      :key="carObj._id"
      :carData="carObj"
      :carIndex="index"
    />
  </div>
</template>

<script>
import Car from "./Car";

export default {
  name: "Cars",
  mounted() {
    //NOTE mounted is fired when the component is 'mounted' to the page
    //NOTE '$' is a reference to the Root instance (main.js)
    this.$store.dispatch("getCars");
  },
  data() {
    return {};
  },
  //NOTE Computed's are watching the store for changes (observers) and are reactive to change
  //NOTE Computeds can be treated like getters (variable properties) and should always be used when getting data from the state
  computed: {
    //NOTE Computeds must always return a value
    cars() {
      return this.$store.state.cars;
    }
  },
  components: {
    Car
  }
};
</script>

<style></style>
