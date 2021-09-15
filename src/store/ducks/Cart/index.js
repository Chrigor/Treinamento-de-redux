import CartTypes from './types';
import produce from 'immer';

const INITIAL_STATE = {
    data: [],
};


const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.ADD_TO_CART:
            return produce(state, (draft) => {
                const { payload } = action;
                draft.data.push(payload);
                draft.loading = true;
                draft.error = false;
            });

        case CartTypes.REMOVE_TO_CART:
            return produce(state, (draft) => {
                const { payload: id } = action;
                draft.data = draft.data.filter((product) => product.id !== id)

                draft.loading = false;
                draft.error = false;
            });

        default:
            return state;
    }
};

export default reducer;