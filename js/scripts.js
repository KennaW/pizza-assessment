var pizzaProcessor = {
  pizza: 5,
  pepperoni: 4,
  cheese: 2,  
  cost: function (type) {
    if (pepperoni) {
      this.pizza =+ this.pepperoni;
    }
    if (cheese) {
      this.pizza =+ this.cheese;
    }
  }
}
