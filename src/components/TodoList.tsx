import { MouseEvent, useMemo } from 'react';
import { toggleTodo } from '../actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { VisibilityFilter } from '../types';

export default () => {
    const dispatch = useAppDispatch();
    const allTodos = useAppSelector(state => state.todos);
    const filter = useAppSelector(state => state.filter);
    const todos = useMemo(() => allTodos.filter(item => {
        switch (filter) {
            case VisibilityFilter.SHOW_ALL:
                return true;
            case VisibilityFilter.SHOW_COMPLETE:
                return item.completed;
            case VisibilityFilter.SHOE_ACTIVE:
                return !item.completed;
        }
    }), [allTodos, filter]);
    return (
        <section>
            <ul>
                {todos.map(item => (
                    <li key={item.id}
                        onClick={(e: MouseEvent<HTMLLIElement>) => {dispatch(toggleTodo(item.id))}}
                        style={{textDecoration: (item.completed ? 'line-through' : 'none'), cursor: 'pointer'}}
                    >{item.content}</li>
                ))}
            </ul>
        </section>
    );
}