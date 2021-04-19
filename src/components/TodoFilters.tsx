import { useCallback, MouseEvent } from 'react';
import { setVisibilityFilter } from '../actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { VisibilityFilter } from '../types';

const FilterButton = (props: {
    filter: VisibilityFilter
}) => {
    const filterMap: {[key in VisibilityFilter]: string} = {
    }
    return (
        <button ></button>
    );
}

export default () => {
    const filter = useAppSelector(state => state.filter);
    const dispatch = useAppDispatch();
    const onFilterClick = useCallback((filter: VisibilityFilter) => (e: MouseEvent) => {
        dispatch(setVisibilityFilter(filter));
    }, [dispatch]);
    return (
        <section>
            <button 
                onClick={onFilterClick(VisibilityFilter.SHOW_ALL)} 
                disabled={filter === VisibilityFilter.SHOW_ALL}>
                    SHOW ALL
            </button>
            <button 
                onClick={onFilterClick(VisibilityFilter.SHOW_COMPLETE)} 
                disabled={filter === VisibilityFilter.SHOW_COMPLETE}>
                    SHOW COMPLETED
            </button>
            <button 
                onClick={onFilterClick(VisibilityFilter.SHOE_ACTIVE)} 
                disabled={filter === VisibilityFilter.SHOE_ACTIVE}>
                    SHOW ACTIVE
            </button>
        </section>
    );
}