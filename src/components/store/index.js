import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listId: [
      {
        id: 1,
        name:"bulbasaur",
      },
      {
        id: 2,
        name:"ivysaur",
      },
      {
        id: 3,
        name:"venusaur",
      },
      {
        id: 4,
        name:"charmander",
      },
      {
        id: 5,
        name:"charmeleon",
      },
      {
        id: 6,
        name:"charizard",
      },
      {
        id: 7,
        name:"squirtle",
    
      },
      {
        id: 8,
        name:"wartortle",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      },
      {
        id: 9,
        name:"blastoise",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
