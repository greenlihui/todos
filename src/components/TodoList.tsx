import { toggleTodo } from '../actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { TodoItem, VisibilityFilter } from '../types';

export default () => {
    const dispatch = useAppDispatch();
    const todos = useAppSelector(state => state.todos);
    const filter = useAppSelector(state => state.filter);
    const itemFilterFunc = (item: TodoItem) => {
        switch (filter) {
            case VisibilityFilter.SHOW_ALL:
                return true;
            case VisibilityFilter.SHOW_COMPLETE:
                return item.completed;
            case VisibilityFilter.SHOE_ACTIVE:
                return !item.completed;
        }
    };
    return (
        <section>
            <ul>
                {todos.filter(itemFilterFunc).map(item => (
                    <li key={item.id}
                        onClick={e => dispatch(toggleTodo(item.id))}
                        style={{textDecoration: (item.completed ? 'line-through' : 'none'), cursor: 'pointer'}}
                    >{item.content}</li>
                ))}
            </ul>
        </section>
    );
}