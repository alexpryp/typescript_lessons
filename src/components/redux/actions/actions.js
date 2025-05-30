import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
} from 'components/redux/actions/actionTypes';

function addTodo(text = 'Build my first Redux app') {
    return {
        type: ADD_TODO,
        text
    }
}

function toggleToDo(index = 5) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

function setVisibilityFilter(filter = 'SHOW_COMPLETED') {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

const boundAddTodo = (text) => dispatch(addTodo(text));
const boundToggleToDo = (index) => dispatch(toggleToDo(index));
const boundSetVisibilityFilter = (filter) => dispatch(setVisibilityFilter(filter));
