<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>Welcome to Gregslist</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <cars />
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <create-car />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <car-details />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Cars from "@/components/Cars";
import CarDetails from "@/components/CarDetails";
import CreateCar from "@/components/CreateCar";

export default {
  name: "Home",
  components: {
    Cars,
    CarDetails,
    CreateCar
  }
};
</script>
