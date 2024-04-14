"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderCoffee = void 0;
const orderCoffee = (coffeeName, cbError, cbSuccess) => {
    let coffee = null;
    console.log("sedang membuat kopi, harap menunggu...");
    setTimeout(() => {
        if (coffeeName == 'Teh') {
            cbError(`Kami tidak menjual ${coffeeName}`);
        }
        else {
            coffee = `pesanan untuk ${coffeeName} kamu sudah jadi`;
            cbSuccess(coffee);
        }
    }, 3000);
};
exports.orderCoffee = orderCoffee;
//# sourceMappingURL=order-coffee.js.map