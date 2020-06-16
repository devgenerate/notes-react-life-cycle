import { useCallback, useReducer } from 'react';

const ACTIONS = {
    SET_DESCRIPTION: 'SET_DESCRIPTION',
    SET_TITLE: 'SET_TITLE'
};

const INITIAL_STATE = {
    description: '',
    title: ''
};

function reducer(state = INITIAL_STATE, action) {
    const { payload, type } = action;

    switch (type) {
        case ACTIONS.SET_DESCRIPTION:
            return {
                ...state,
                description: payload
            };
        case ACTIONS.SET_TITLE:
            return {
                ...state,
                title: payload
            };
        default:
            return state;
    }
}

export function useForm() {
    const [{ description, title }, dispatch] = useReducer(reducer, INITIAL_STATE);

    const setDescription = useCallback((payload) => {
        dispatch({ payload, type: ACTIONS.SET_DESCRIPTION });
    }, []);

    const setTitle = useCallback((payload) => {
        dispatch({ payload, type: ACTIONS.SET_TITLE });
    }, []);

    return {
        description,
        setDescription,
        setTitle,
        title
    };
}