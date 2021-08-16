import { API } from './api'

export const getQuestions = (initial , query , offset) => {
    return API.get(initial , query , offset)
}