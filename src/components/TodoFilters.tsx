import { useCallback, MouseEvent } from 'react';
import { setVisibilityFilter } from '../actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { VisibilityFilter } from '../types';

export default () => {
    const filter = useAppSelector(state => state.filter);
    const dispatch = useAppDispatch();
    return (
        <section>
            <button 
                onClick={e => {dispatch(setVisibilityFilter(VisibilityFilter.SHOW_ALL))}} 
                disabled={filter === VisibilityFilter.SHOW_ALL}>
                    SHOW ALL
            </button>
            <button 
                onClick={e => {dispatch(setVisibilityFilter(VisibilityFilter.SHOW_COMPLETE))}} 
                disabled={filter === VisibilityFilter.SHOW_COMPLETE}>
                    SHOW COMPLETED
            </button>
            <button 
                onClick={e => {dispatch(setVisibilityFilter(VisibilityFilter.SHOE_ACTIVE))}} 
                disabled={filter === VisibilityFilter.SHOE_ACTIVE}>
                    SHOW ACTIVE
            </button>
        </section>
    );
}