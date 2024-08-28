// import { defineStore } from 'pinia'

// export let useFruitStore = defineStore('fruits', {
//     //data
//     state: () => ({
//         name: '',
//         description: '',
//         origin: '',
//         season: '',
//         image_url:''
//     }),
//     //methods
//     actions: {
//         async getFruitData() {     
//             let r = await import('@/fruits.json');
//                 this.$state = r.default;
//             }
//     }
//     })

import { defineStore } from 'pinia';

export const useFruitStore = defineStore('fruits', {
  // State
  state: () => ({

    fruits: [ {
      "name": "Apple",
      "description": "A sweet, crisp fruit that comes in many varieties and colors. Apples are high in fiber and vitamin C.",
      "image_url": "../images/apple.webp",
      "origin": "Central Asia",
      "season": "Fall"
    },
    {
      "name": "Banana",
      "description": "A tropical fruit that is sweet and soft when ripe. Bananas are a great source of potassium.",
      "image_url": "../images/banana.webp",
      "origin": "Southeast Asia",
      "season": "Year-round"
    },
    {
      "name": "Orange",
      "description": "A citrus fruit known for its juicy, tangy taste and high vitamin C content.",
      "image_url": "../images/orange.webp",
      "origin": "China",
      "season": "Winter"
    },],
    index:1,
    disabled:false,
    cursorNotAllowed:false
    // name: 'Apple',
    // description: 'Hello Apple, how are you doing now, I thought you were coming over, I felt so hungry and with tat it induced an unforeseen anger that makes me get loss control and I can beat someone very bad',
    // origin: 'Kenya',
    // season: 'Vuli, siku ya mvua',
    // image_url: 'apple'
  }),
  // Getters
  getters: {
    nextIndex() {
      if(this.index > this.fruits.legth){
        this.index = 1
      } else {
        this.index += 1
      }
    },
    previousIndex() {
      if(this.index === -1){
        this.disabled = true
        this.cursorNotAllowed = true
      } else {
        return this.index--
      }
    }
  }
  // Actions
  // actions: {
  //   async getFruitData() {     
  //     try {
  //       let r = await import('@/fruits.json');
  //       this.name = r.default.name;
  //       this.description = r.default.description;
  //       this.origin = r.default.origin;
  //       this.season = r.default.season;
  //       this.image_url = r.default.image_url;
  //     } catch (error) {
  //       console.error("Failed to load fruit data:", error);
  //     }
  //   }
  // }
});




