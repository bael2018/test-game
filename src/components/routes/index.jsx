import { Redirect, Route, Switch } from "react-router-dom"
import Main from "../../pages/Main"
import Register from "../../pages/Register"

const Routes = ({user}) => {
    return(
        user ? (
            <Switch>
                <Route component={Main} path='/'/>
                <Redirect to='/'/>
            </Switch>
        ) : (
            <Switch>
                <Route component={Register} path='/register'/>
                <Redirect to='/register'/>
            </Switch>
        )
    )
}

export default Routes