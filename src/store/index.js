import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/cars",
  timeout: 3000
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {}
  },
  mutations: {
    //NOTE first argument of a mutationn is always the state
    // the second is always the payload
    setCars(state, cars) {
      state.cars = cars;
    },
    addCar(state, car) {
      state.cars.push(car);
    },
    removeCar(state, id) {
      state.cars = state.cars.filter(c => c._id != id);
    },
    setActiveCar(state, car) {
      state.activeCar = car;
    }
  },
  actions: {
    //NOTE the first argument of an action is always an object, destructuring allows us to only grab what we need
    async getCars({ commit, dispatch }) {
      try {
        let res = await _api.get("");
        //NOTE Commits trigger mutations by name (first arguement), and provide a payload (second argument)
        // you may only pass two arguments the name of the mutation and the payload
        commit("setCars", res.data.data); //NOTE the res.data.data is the sandbox api way of providing data
      } catch (error) {
        console.error(error);
      }
    },
    async createCar({ commit, dispatch }, newCar) {
      try {
        let res = await _api.post("", newCar);
        // dispatch("getCars");
        commit("addCar", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCar({ commit, dispatch }, carId) {
      try {
        let res = await _api.delete(carId);
        // dispatch("getCars");
        commit("removeCar", carId);
        commit("setActiveCar", {});
      } catch (error) {
        console.error(error);
      }
    },
    setActiveCar({ commit }, car) {
      commit("setActiveCar", car);
    }
  }
});
