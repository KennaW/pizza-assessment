var pizzaProcessor = {
  pizza: 5,

  pepperoni: function () {
    this.pizza += 5;
  }
};

$(document).ready(function () {

  $("form#pizzaSelect").submit(function(event) {
  event.preventDefault();

  var topping = $("select#toppings").val();
  var order = Object.Create(pizzaProcessor);

    if (topping==="cheese") {
      return order.pizza;
    }
    elseif(topping==="pepperoni"){
      order.pepperoni();
      return order.pizza;
    }

  });
});
