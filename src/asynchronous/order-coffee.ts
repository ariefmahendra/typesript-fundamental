// export const orderCoffee = () => {
//     let coffee = null;
//
//     console.log("Sedang membuat kopi, harap menunggu ...");
//
//     setTimeout(()=> {
//         coffee = "kopi sudah jadi.";
//     }, 300)
//
//     return coffee
// }

// export const orderCoffee = (callback) => {
//     let coffee = null;
//     console.log("sedang membuat kopi, harap menunggu...");
//     setTimeout(() => {
//         coffee = "kopi sudah jadi.";
//         callback(coffee);
//     }, 3000)
// }

export const orderCoffee = (coffeeName: string, cbError, cbSuccess) => {
    let coffee = null;
    console.log("sedang membuat kopi, harap menunggu...");
    setTimeout(() => {
        if (coffeeName == 'Teh') {
            cbError(`Kami tidak menjual ${coffeeName}`);
        } else {
            coffee = `pesanan untuk ${coffeeName} kamu sudah jadi`;
            cbSuccess(coffee);
        }
    }, 3000)
}