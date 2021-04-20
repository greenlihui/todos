import { useCallback, MouseEvent } from 'react';
import { setVisibilityFilter } from '../actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { VisibilityFilter } from '../types';

const FilterButton = (props: {
    filter: VisibilityFilter
}) => {
    const dispatch = useAppDispatch();
    const currentFilter = useAppSelector(state => state.filter);
    const onClick = (e: MouseEvent) => {
        dispatch(setVisibilityFilter(props.filter))
    };
    return (
        <button onClick={onClick} disabled={props.filter === currentFilter}>
            {props.filter.toString()}
        </button>
    );
}

export default () => {
    return (
        <section>
            <FilterButton filter={VisibilityFilter.SHOW_ALL} />
            <FilterButton filter={VisibilityFilter.SHOW_COMPLETE} />
            <FilterButton filter={VisibilityFilter.SHOE_ACTIVE} />
        </section>
    );
}