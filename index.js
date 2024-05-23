class transaction {
  constructor() {
    this.product = [];
  }
  addProduct(product) {
    this.product.push(product);
  }

  payment(discount) {
    let price = 0;
    this.product.forEach((product) => {
      if (product === "apple") {
        price += 1000;
      } else if (product === "orange") {
        price += 1500;
      } else if (product === "banana") {
        price += 2000;
      } else {
        console.log("we don't have that product");
      }
    });
    console.log(`Total price: ${price}`);
    console.log(`Discount: ${discount()}`);
    console.log(`Total payment: ${price * discount()}`);
  }
}

const discount = () => {
  return 0.5;
};

// create a readline interface
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const transaction1 = new transaction();

const processTransaction = () => {
  rl.question("Enter the product you want to buy: ", (product) => {
    transaction1.addProduct(product);
    rl.question("Do you want to buy another product? (yes/no): ", (answer) => {
      if (answer === "yes") {
        processTransaction();
      } else {
        transaction1.payment(discount);
      }
    });
  });
};

processTransaction(); //jerry
