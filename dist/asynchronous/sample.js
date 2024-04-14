"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderCoffee = void 0;
const orderCoffee = (callback) => {
    let coffee = null;
    console.log("sedang membuat kopi, harap menunggu...");
    setTimeout(() => {
        coffee = "kopi sudah jadi.";
        callback(coffee);
    }, 3000);
};
exports.orderCoffee = orderCoffee;
//# sourceMappingURL=sample.js.map