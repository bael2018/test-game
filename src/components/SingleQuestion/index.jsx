import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { amountQuestionsAction, correctAnswerAction, getPointsAction, removePointsAction, uncorrectAnswerAction } from '../../actionCreators'
import cls from './SingleQuestion.module.css'

const SingleQuestion = ({change , clearTick , timer}) => {
    const [userAnswer , setUserAnswer] = useState('')

    const value = useSelector(state => state.single.value)
    const answer = useSelector(state => state.single.answer)
    const question = useSelector(state => state.single.question)
    const userPoints = useSelector(state => state.user.points)
    const dispatch = useDispatch()

    if(timer === 60){
        alert('You are out of time!')
        alert(`The correct answer was ${answer}`)
        dispatch(uncorrectAnswerAction(1))
        dispatch(amountQuestionsAction(1))
        change(false)
        clearTick(false)
    }

    const checkAnswer = () => {
        dispatch(amountQuestionsAction(1))
        if(userAnswer === ''){
            alert('Fill the input')
        }else{
            if(answer.toUpperCase() === userAnswer.toUpperCase()){
                alert(`Well done! Your answer is correct and you have earned ${value} points`)
                dispatch(correctAnswerAction(1))
                dispatch(getPointsAction(value))
                setUserAnswer('')
                change(false)
            }else{
                dispatch(uncorrectAnswerAction(1))
                if(userPoints >= value){
                    alert(`Wrong answer! Unfortunately you have lost ${value} points`)
                    alert(`The correct answer was ${answer}`)
                    dispatch(removePointsAction(value))
                    setUserAnswer('')
                    change(false)
                }else{
                    alert(`Wrong answer!`)
                    alert(`The correct answer was ${answer}`)
                    setUserAnswer('')
                    change(false)
                }
            }
        }
    }

    return (
        <section className={cls.single}>
            <div className={cls.single_header}>
                <h4 className={cls.single_title}>{question}</h4>
                <span>{timer}</span>
            </div>
            <div className={cls.single_body}>
                <h4>Your points <span>{value}</span></h4>
                <input value={userAnswer} onChange={e => setUserAnswer(e.target.value)} type="text" placeholder='Answer...' />
                <button onClick={checkAnswer}>ENTER</button>
            </div>
        </section>
    )
}

export default SingleQuestion