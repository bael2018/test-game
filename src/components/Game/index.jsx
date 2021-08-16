import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asycRequestAction, singleAnswerAction, singleQuestAction, singleValueAction } from '../../actionCreators'
import Loader from '../Loader'
import SingleQuestion from '../SingleQuestion'
import cls from './Game.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'

const Game = () => {
    const questions = useSelector(state => state.quest.question)
    const loading = useSelector(state => state.loader.loading)
    const [single , setSingle] = useState(false)
    const [game , setGame] = useState(false)
    const [quest , setQuest] = useState([])
    const dispatch = useDispatch()

    setTimeout(() => {
        setQuest(questions)
    }, 600);

    const startFunc = () => {
        setGame(true)
        dispatch(asycRequestAction())
        setTimeout(() => {
            setQuest(questions)
        }, 600);
    }

    const singleQuestion = (value , answer , question) => {
        setSingle(true)
        dispatch(singleValueAction(value))
        dispatch(singleAnswerAction(answer))
        dispatch(singleQuestAction(question))
    }

    if(loading){
        return <Loader/>
    }

    return(
        <section className={cls.root}>
            {
                single ? <SingleQuestion change={setSingle}/> :
                (
                    game ? (
                        <section className={cls.game}>
                            <button onClick={() => setGame(false)} className={cls.game_end_btn}>End Game</button>
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
                                            <h1>Something went wrong</h1>
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