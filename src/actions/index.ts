import { Action, ActionType, TodoItem, VisibilityFilter } from '../types';

let nextTodoId = 0;

export const addTodo = (content: string): Action<TodoItem> => ({
    type: ActionType.ADD_TODO,
    payload: {
        id: nextTodoId++,
        content,
        completed: false
    }
});

export const toggleTodo = (id: number): Action<number> => ({
    type: ActionType.TOGGLE_TODO,
    payload: id
});

export const setVisibilityFilter = (filter: VisibilityFilter): Action<VisibilityFilter> => ({
    type: ActionType.SET_VISIBILITY_FILTER,
    payload: filter
});