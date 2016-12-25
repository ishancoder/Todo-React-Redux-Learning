import dispatcher from "../dispatcher";

export function createTodo(content) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        payload: content
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        payload: id
    });
}
