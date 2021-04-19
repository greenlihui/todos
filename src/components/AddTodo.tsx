import { useRef } from 'react';
import { addTodo } from '../actions';
import { useAppDispatch } from '../hooks';

export default () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    return (
        <section>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!inputRef.current?.value.trim()) {
                    return;
                }
                if (inputRef.current) {
                    dispatch(addTodo(inputRef.current.value));
                    inputRef.current.value = '';
                }
            }}>
                <input type="text" ref={inputRef}/>
                <button type="submit">Add Todo</button>
            </form>
        </section>
    );
}