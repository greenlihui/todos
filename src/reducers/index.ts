import { combineReducers } from "redux";
import { Action, ActionType, TodoItem, VisibilityFilter } from "../types";

const todos= (
    state: TodoItem[] = [], 
    action: Action<TodoItem | number>
): TodoItem[] => {
    switch (action.type) {
        case ActionType.ADD_TODO:
            return [
                ...state,
                action.payload as TodoItem
            ]
        case ActionType.TOGGLE_TODO:
            return state.map(item => (
                (item.id === action.payload)
                ? {...item, completed: !item.completed}
                : item
            ));
        default:
            return state;
    }
}

const filter = (
    state: VisibilityFilter = VisibilityFilter.SHOW_ALL, 
    action: Action<VisibilityFilter>
): VisibilityFilter => {
    if (action.type === ActionType.SET_VISIBILITY_FILTER) {
        return action.payload
    }
    return state;
}

export default combineReducers({
    todos,
    filter
});