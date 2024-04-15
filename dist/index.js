"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_service_1 = require("./observable/demo/todo.service");
const rxjs_1 = require("rxjs");
const todo = {
    label: "Makan",
    isDone: false
};
const todoService = new todo_service_1.TodoService();
const newPromise = todoService.addPromise(todo);
newPromise.then((todo) => {
    console.log(`Todo dengan promise : `, todo);
});
todoService.add(todo)
    .subscribe(todo => { console.log("with observable", todo); });
(0, rxjs_1.combineLatest)([
    todoService.add({ label: "Makan", isDone: false }),
    todoService.add({ label: "Tidur", isDone: false }),
    todoService.add({ label: "Sikat Gigi", isDone: false }),
    todoService.add({ label: "Olahraga", isDone: true }),
]).subscribe((todo) => {
    console.log(`${todo.length} todo tersimpan : `, todo);
});
todoService.notify()
    .subscribe((isUpdate) => {
    if (isUpdate) {
        todoService.listTodo()
            .pipe((0, rxjs_1.map)((todos) => {
            return todos.map((todo) => {
                return `Todo ${todo.label} - ${todo.isDone ? ' selesai' : ' belum selesai'}`;
            });
        }))
            .subscribe((list) => {
            console.log(list);
        });
    }
});
todoService.listTodo()
    .pipe((0, rxjs_1.map)((list) => {
    return list.map((todo) => {
        return `Todo ${todo.label} - ${todo.isDone ? "selesai" : "belum selesai"}`;
    });
}))
    .subscribe((list) => {
    console.log("List Todo: ", list);
});
todoService.update({ label: "makan siang", isDone: true }, 1)
    .subscribe((data) => {
    console.log("update Todo : ", data);
});
//# sourceMappingURL=index.js.map