describe("pizzaProcessor", function() {

    describe("cost of plain pizza", function() {
        it("show cost of plain pizza", function() {
            var cost = Object.create(pizzaProcessor);
            var plain = cost.pizza;
            expect(plain).to.equal(5);
        });
    });
  });
