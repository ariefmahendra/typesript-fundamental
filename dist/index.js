"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_coffee_1 = require("./asynchronous/order-coffee");
const myOrder = (order) => {
    return new Promise((resolve, reject) => {
        (0, order_coffee_1.orderCoffee)(order, reject, resolve);
    });
};
async function listOrderCoffee() {
    try {
        const latte = await myOrder("latte");
        const kopi = await myOrder("KAPAL API");
        console.log(latte);
        console.log(kopi);
        const teh = await myOrder("Teh");
        console.log(teh);
    }
    catch (err) {
        console.log(err);
    }
}
listOrderCoffee();
//# sourceMappingURL=index.js.map