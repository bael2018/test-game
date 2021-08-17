import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { singleAnswerAction, singleQuestAction, singleValueAction } from '../../actionCreators'
import SingleQuestion from '../SingleQuestion'
import cls from './Game.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {GiPerspectiveDiceSixFacesRandom} from 'react-icons/gi'

const Game = () => {
    const questions = useSelector(state => state.quest.question)
    const [single , setSingle] = useState(false)
    const [timer , setTimer] = useState(0)
    const [game , setGame] = useState(false)
    const [quest , setQuest] = useState([])
    const dispatch = useDispatch()

    const tick = item => {
        if(item) setInterval(() => setTimer(el => el + 1) , 1000)
        setTimer(0)
    }

    const startFunc = () => {
        setGame(true)
        setQuest(questions)
    }

    const singleQuestion = (value , answer , question) => {
        tick(true)
        setSingle(true)
        dispatch(singleValueAction(value))
        dispatch(singleAnswerAction(answer))
        dispatch(singleQuestAction(question))
    }
 
    return(
        <section className={cls.root}>
            {
                single ? <SingleQuestion timer={timer} clearTick={tick} change={setSingle}/> :
                (
                    game ? (
                        <section className={cls.game}>
                            <button onClick={() => setGame(false)} className={cls.game_end_btn}>End Game</button>
                            <button className={cls.game_random}><GiPerspectiveDiceSixFacesRandom/></button>
                            <div className={cls.game_container}>
                                {
                                    quest.length !== 0 ? (
                                        quest.map(item => {
                                            return item.map(({title , id , clues}) => {
                                                return <div className={cls.game_container_inner} key={id}>
                                                    <div className={cls.game_container_inner_title}>
                                                        {title}
                                                    </div>
                                                    <div className={cls.game_container_inner_body}>
                                                        {
                                                            clues.map(({id , value , answer , question}) => {
                                                                return <span onClick={() => singleQuestion(value , answer , question)} key={id}>{value}</span>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            })
                                        })
                                    ) : (
                                        <div className={cls.warning}>
                                            <h1>Something went wrong !</h1>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                    ) : (
                        <div className={cls.startBlock}>
                            <h3>The game is ready click the button !</h3>
                            <span><AiOutlineArrowDown/></span>
                            <button onClick={startFunc} className={cls.startBtn}>Start The Game</button>
                        </div>
                    )
                )
            }
        </section>
    )
}

export default Game