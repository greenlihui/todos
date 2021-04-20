export interface TodoItem {
    id: number;
    content: string;
    completed: boolean;
}

export enum VisibilityFilter {
    SHOW_ALL = 'SHOW ALL',
    SHOW_COMPLETE = 'SHOW COMPLETE',
    SHOE_ACTIVE = 'SHOW ACTIVE'
}

export enum ActionType {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
}

export interface Action<T> {
    type: ActionType;
    payload: T
}

export interface TodosState {
    todos: TodoItem[]
}

export interface FilterState {
    filter: VisibilityFilter
}

export interface RootState extends TodosState, FilterState {}