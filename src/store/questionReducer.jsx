import { GET_QUESTIONS } from "../types";

const initialState = {
    question: []
}

export const questionReducer = ((state = initialState , action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return {...state, question: action.payload}
        default:
            return state;
    }
})