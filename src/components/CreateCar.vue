<template>
  <div class="create-car">
    <form @submit.prevent="createCar">
      <input
        type="text"
        name="make"
        placeholder="Make..."
        v-model="newCar.make"
        required
      />
      <input
        type="text"
        name="model"
        placeholder="model..."
        v-model="newCar.model"
        required
      />
      <input
        type="number"
        name="year"
        placeholder="year..."
        v-model="newCar.year"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="price..."
        v-model="newCar.price"
        required
      />
      <input
        type="text"
        name="description"
        placeholder="description..."
        v-model="newCar.description"
      />
      <input
        type="text"
        name="imgUrl"
        placeholder="imgUrl..."
        v-model="newCar.imgUrl"
        required
      />
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateCar",
  data() {
    return {
      newCar: {}
    };
  },
  methods: {
    createCar() {
      this.$store.dispatch("createCar", this.newCar);
    }
  }
};
</script>

<style></style>
