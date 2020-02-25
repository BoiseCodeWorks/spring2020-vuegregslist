<template>
  <div class="car-details">
    <h1>CAR DETAILS .VUE</h1>
    <div v-if="details._id">
      {{ details }}
    </div>
    <button @click="deleteCar">delete</button>
  </div>
</template>

<script>
export default {
  name: "CarDetails",
  computed: {
    details() {
      return this.$store.state.activeCar;
    }
  },
  methods: {
    deleteCar() {
      this.$store.dispatch("deleteCar", this.details._id);
    }
  }
};
</script>

<style></style>
