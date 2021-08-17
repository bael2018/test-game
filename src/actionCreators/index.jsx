import { AMOUNT_QUEST, CORRET_ANSWER, GET_ASYNC_QUESTIONS, GET_POINTS, GET_QUESTIONS, REMOVE_POINTS, SINGLE_ANSWER, SINGLE_QUESTION, SINGLE_VALUE, UNCORRET_ANSWER } from "../types"

export const getQuestionsAction = payload => {
    return {
        type: GET_QUESTIONS,
        payload
    }
}

export const asycRequestAction = () => {
    return {
        type: GET_ASYNC_QUESTIONS
    }
}

export const amountQuestionsAction = payload => {
    return {
        type: AMOUNT_QUEST,
        payload
    }
}

export const correctAnswerAction = payload => {
    return {
        type: CORRET_ANSWER,
        payload
    }
}

export const uncorrectAnswerAction = payload => {
    return {
        type: UNCORRET_ANSWER,
        payload
    }
}

export const getPointsAction = payload => {
    return {
        type: GET_POINTS,
        payload
    }
}

export const removePointsAction = payload => {
    return {
        type: REMOVE_POINTS,
        payload
    }
}

export const singleValueAction = payload => {
    return {
        type: SINGLE_VALUE,
        payload
    }
}

export const singleAnswerAction = payload => {
    return {
        type: SINGLE_ANSWER,
        payload
    }
}

export const singleQuestAction = payload => {
    return {
        type: SINGLE_QUESTION,
        payload
    }
}
