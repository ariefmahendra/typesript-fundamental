/**
 * fungsi biasa
 */
import {Observable} from "rxjs";

const foo = (): number => {
    console.log("print foo");
    return 10;
}

const x = foo;
console.log(x);

/**
 * Observable
 * - Menyerupai promise
 * - Dapat dijalankan ketika ada yang subscribe
 * - Yang menjadi subscribe, adalah observer
 * - Observer terdapat 3 yang dapat digunakan
 *  - observer.next (berhasil)
 *  - observer.error (ketika ada error)
 *  - observer.complete (artinya ketika tidak ada lagi observable)
 *  contoh: try, catch, finally
 */

const fooWithObservable = new Observable(observer => {
    try {
        console.log("print from foo with observable");
        observer.next(10);
        observer.next(12);
        observer.next(11);
        setTimeout(() => {
            observer.next(13);
        }, 1000)
    } catch (err){
        observer.error(err);
    }
})

console.log("before");
fooWithObservable.subscribe(x => console.log(x))
console.log("after");