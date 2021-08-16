import { NavLink, Route, Switch } from 'react-router-dom'
import cls from './Main.module.css'
import Statistic from '../../components/Statistic'
import Game from '../../components/Game'
import { useState } from 'react'

const Main = () => {
    const [enter , setEnter] = useState(false)

    return(
        <section className={cls.root}>
            <div className={cls.changePage}>
                <NavLink onClick={() => setEnter(true)} activeClassName={cls.activeNavlink} exact to='/statistics'>Statistics</NavLink>
                <NavLink onClick={() => setEnter(true)} activeClassName={cls.activeNavlink} exact to='/game'>Game</NavLink>
            </div>
            <div className={cls.main_container}>
                {
                    enter ? (
                        <Switch>
                            <Route path='/statistics' component={Statistic}/>
                            <Route path='/game' component={Game}/>
                        </Switch>
                    ) : (
                        <div className={cls.main_inside}>
                            <span>Welcome to the playGround !</span>
                            <h5>Theare are some rules:</h5>
                            <ul>
                                <li>You have only 60 seconds to give a correct answer.</li>
                                <li>If your answer is not correct, you will lose points.</li>
                                <li>Try to answer as many questions as that possible.</li>
                                <li>Good luck have fun !</li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Main