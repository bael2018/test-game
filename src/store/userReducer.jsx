import { AMOUNT_QUEST, CORRET_ANSWER, GET_POINTS, REMOVE_POINTS, UNCORRET_ANSWER } from "../types"

const userName = JSON.parse(localStorage.getItem('userName'))

const initialState = {
    name: userName,
    amountOfQuest: 0,
    correctAnswer: 0,
    uncorrectAnswer: 0,
    points: 0
}

export const userReducer = ((state = initialState , action) => {
    switch (action.type) {
        case AMOUNT_QUEST:
            return {...state , amountOfQuest: state.amountOfQuest + action.payload}
        case CORRET_ANSWER:
            return {...state , correctAnswer: state.correctAnswer + action.payload}
        case UNCORRET_ANSWER:
            return {...state , uncorrectAnswer: state.uncorrectAnswer + action.payload}
        case GET_POINTS:
            return {...state , points: state.points + action.payload}
        case REMOVE_POINTS:
            return {...state , points: state.points - action.payload}
        default:
            return state;
    }
})