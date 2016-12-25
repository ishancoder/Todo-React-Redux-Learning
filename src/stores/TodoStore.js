import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 1,
                content: "YOYO",
                completed: true
            }, {
                id: 2,
                content: "YOYO",
                completed: true
            }, {
                id: 3,
                content: "YOYO",
                completed: true
            }, {
                id: 4,
                content: "YOYO",
                completed: true
            }, {
                id: 5,
                content: "YOYO",
                completed: true
            }
        ];
    }

    createTodo(content) {
        const id = Date.now();
        this.todos.push({
            id,
            content,
            completed: false
        });
        this.emit('change');
    }

    getAll() {
        return this.todos;
    }

    handleAction(action) {
        switch (action.type) {
            case "CREATE_TODO":
                this.createTodo(action.payload);
                break;
            default:
                break;
        }
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleAction.bind(todoStore));
window.dispatcher = dispatcher;
window.todoStore = todoStore;
export default todoStore;
