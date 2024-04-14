// import CarType from "./data/car-type";
//
// const fullName: string = "arief mahendra";
// console.log(fullName.toUpperCase());
// const address: string = "kemalo abung";
// console.log(address.toUpperCase());
// const age: number = 30;
// console.log(age);
//
// const carType: CarType = CarType.SEDAN;
// console.log(carType); // hasilnya 0
//
// const carType2 = CarType[0];
// console.log(carType2); // hasilnya adalah SEDAN

/*
installation
- Global  = npm install -g ts-node || npm install -g typescript
- Local  = npm install ts-node || npm install typescript

Typescript harus kita compile menjadi javascript terlebih dahulu sebelum dijalankan dengan menggunakan
- npx tsc index.ts || tsc index.ts
Dengan begitu dia akan membuat satu file yang sama dengan format javascript

Di Typescript terdapat tipe data ENUM, interface,
 */

// import {Car} from "./data/car";
// import {Vehicle} from "./data/vehicle";
// import CarType from "./data/car-type";
//
// const vehicle: Vehicle = {
//     brand: "Toyota", engine: 0, id: "123", isStarted: false, name: "Avanza", type: CarType.SEDAN
// };
//
// const car: Car = new Car(vehicle)
//

import {orderCoffee} from "./asynchronous/order-coffee";

// const coffee = orderCoffee();
// console.log(coffee);

// orderCoffee(coffee => console.log(coffee));

/*
    const orderError = (coffee: string) => {console.log(`failed: ${coffee}`)}
    const orderSuccess = (coffee: string) => {console.log(`success: ${coffee} `)}

    // terjadi callback hell
    orderCoffee("kapal api", orderError, (coffee: any)=> {
        console.log(coffee);
        orderCoffee("teh tubruk", orderError, (coffee: any)=> {
            console.log(coffee);
            orderCoffee("kopi tubruk", orderError, (coffee: any)=> {
                console.log(coffee);
            })
        })
    })
*/

/*
    promise: resolve, reject
    ciri khas promise, itu ada then (success) dan catch (error)
    Tapi dengan promise tidak bisa handle banyak eksekusi

    const myOrderCoffee = new Promise((resolve, reject) => {
        orderCoffee("KOPI ABC", reject, resolve)
        orderCoffee("KAPAL API", reject, resolve)
    });

    myOrderCoffee.then(orderCoffee => {
        console.log(orderCoffee);
    }).catch((error)=> {
        console.log(error);
    });

*/

 /*
    promise all
    permasalahannya akan timbul jika memasukkan kondisi error
    maka order sebelumnya atau setelahnya tidak akan dieksekusi
    langsung menghasilkan nilai error tersebut

    const myOrder = (order: string): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            orderCoffee(order, reject, resolve)
        })
    }

    Promise.all([
        myOrder("KOPI TARIK"),
        myOrder("KOPI ABC"),
        myOrder("KOPI SUSU KAMPBING"),
        myOrder("Teh")
    ]).then((allOrder: string[]) => {
        for (const order of allOrder) {
            console.log(order);
        }
    }).catch((err) => {
        console.error(err);
    })

 */

// menggunakan async await

const myOrder = (order: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        orderCoffee(order, reject, resolve);
    });
}

async function listOrderCoffee(): Promise<void>{
   try {
    const latte = await myOrder("latte");
    const kopi = await myOrder("KAPAL API");

    console.log(latte);
    console.log(kopi);

    const teh = await myOrder("Teh");
    console.log(teh);
   } catch (err){
       console.log(err)
   }
}

listOrderCoffee()