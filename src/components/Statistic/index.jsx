import { useDispatch, useSelector } from 'react-redux'
import { clearCorrectAction, clearPointsAction, clearQuestAction, clearUncorrectAction } from '../../actionCreators'
import cls from './Statistics.module.css'

const Statistic = () => {
    const userName = useSelector(state => state.user.name)
    const amount = useSelector(state => state.user.amountOfQuest)
    const correctQuest = useSelector(state => state.user.correctAnswer)
    const uncorrectQuest = useSelector(state => state.user.uncorrectAnswer)
    const points = useSelector(state => state.user.points)
    const dispatch = useDispatch()

    const newName = () => {
        localStorage.removeItem('userName')
        window.location.reload()
    }

    const clearStatic = () => {
        dispatch(clearQuestAction(0))
        dispatch(clearCorrectAction(0))
        dispatch(clearUncorrectAction(0))
        dispatch(clearPointsAction(0))
    }   

    return(
        <section className={cls.statistic}>
            <div className={cls.statistic_title}>
                <h2>Statistics</h2>
                <div>
                    <button onClick={newName}>New name</button>
                    <button onClick={clearStatic}>Clear statistic</button>
                </div>
            </div>
            <div className={cls.statistic_body}>
                <div className={cls.statistic_body_inner}>
                    <ul>
                        Name
                    </ul>
                    <ul>
                        <b>{userName}</b>
                    </ul>
                </div>
                <div className={cls.statistic_body_inner}>
                    <ul>
                        AmountOfQuestions
                    </ul>
                    <ul>
                        <b>{amount}</b>
                    </ul>
                </div>
                <div className={cls.statistic_body_inner}>
                    <ul>
                        Correct/Uncorrect answers
                    </ul>
                    <ul>
                        <span className={cls.correct}>{correctQuest}</span><span className={cls.uncorrect}>{uncorrectQuest}</span>
                    </ul>
                </div>
                <div className={cls.statistic_body_inner}>
                    <ul>
                        Points
                    </ul>
                    <ul>
                        <b>{points}</b>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Statistic