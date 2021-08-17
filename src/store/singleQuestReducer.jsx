import { SINGLE_ANSWER, SINGLE_QUESTION, SINGLE_VALUE } from "../types"

const initialState = {
    value: 0,
    answer: '',
    question: '',
    timer: 0
}

export const singleQuestReducer = ((state = initialState , action) => {
    switch (action.type) {
        case SINGLE_VALUE:
            return {...state, value: action.payload}
        case SINGLE_ANSWER:
            return {...state, answer: action.payload}
        case SINGLE_QUESTION:
            return {...state, question: action.payload}
        default:
            return state;
    }
})