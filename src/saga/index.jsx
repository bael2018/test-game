import {put , call ,  takeEvery} from 'redux-saga/effects'
import { getQuestionsAction, hideLoaderAction, showLoaderAction } from '../actionCreators'
import {getQuestions} from '../api/index'
import { GET_ASYNC_QUESTIONS } from '../types'

async function fetchRequest(){
    const data = await getQuestions('categories' , '?count=4' , `&&offset=10`)
    return await data.json()
}

function* questionsWorker(){
    yield put(showLoaderAction())
    const base = yield call(fetchRequest)
    const newBase = base.map(({id}) => {
        const res = []
        getQuestions('category' , `?id=${id}` , '')
        .then(res => res.json())
        .then(el => {
            res.push(el)
        })
        return res
    })
    yield put(getQuestionsAction(newBase))
    yield put(hideLoaderAction())
}

export function* questionWatcher(){
    yield takeEvery(GET_ASYNC_QUESTIONS , questionsWorker)
}