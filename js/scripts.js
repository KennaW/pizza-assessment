var pizzaProcessor = {
  pizza: 5,

  pepperoni: function () {
    this.pizza += 5;
  }
};

$(document).ready(function() {

  $("form#pizzaSelect").submit(function(event) {
  event.preventDefault();

  var toppingInput = $("select#toppings").val();
  var order = Object.create(pizzaProcessor);
  var topping = "";




  if (toppingInput ==="cheese") {
          topping = order.pizza;
          }
          else if(toppingInput==="pepperoni"){
            order.pepperoni();
            topping = order.pizza;
          }

  $("span#price").text(topping);

  });
});
