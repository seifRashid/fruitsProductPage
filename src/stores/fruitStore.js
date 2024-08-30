

import { defineStore } from 'pinia';
// import fruitData from '../fruits.json'

export const useFruitStore = defineStore('fruits', {
  // State
  state: () => ({

    fruits: [], //../images/apple.webp
    index: 5,
    disabled: false,
    cursorNotAllowed: false,
    cartActive: false,
    cartItems: []

  }),
  // Getters
  getters: {
    prodCount() {
      return this.cartItems.length
    },
    cartDisplayedItems() {
      const uniqueById = [...new Map(this.cartItems.map(item => [item.name, item])).values()];
      console.log(uniqueById);
      return uniqueById

    }
  },
  actions: {
    nextIndex() {
      if (this.index == this.fruits.legth) {
        this.index = 1
      } else {
        this.index += 1
      }
    },
    previousIndex() {
      if (this.index === -1) {
        this.disabled = true
        this.cursorNotAllowed = true
      } else {
        return this.index--
      }
    },
    activeCart() {
      this.cartActive = !this.cartActive
    },
    async loadFruitData() {
      console.log('Loading fruit data...');
      try {
        const data = await import('../fruits.json');
        this.fruits = data.default; // Assuming data.default is an array of fruits
      } catch (error) {
        console.error('Failed to load fruit data:', error);
      }
    },
    addToCart() {
      this.cartItems.push(this.fruits[this.index].name)
    }
  },

});




