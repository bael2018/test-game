import { useState } from 'react'
import cls from './Register.module.css'
import {VscWarning} from 'react-icons/vsc'

const Register = () => {
    const [alertWarning , setAlertWarning] = useState(false)
    const [userName , setUserName] = useState('')

    const submitBtn = e => {
        e.preventDefault()

        if(userName === ''){
            setAlertWarning(true)
        }else{
            localStorage.setItem('userName' , JSON.stringify(userName))
            window.location.reload()
            setAlertWarning(false)
            setUserName('')
        }
    }

    return(
        <section className={cls.root}>
            <div className={cls.register_title}>
                <span>Please enter your name!</span>
            </div>
            <div style={alertWarning ? {marginTop: '50px'} : {marginTop: '70px'}} className={cls.register_body}>
                <input value={userName} onChange={e => setUserName(e.target.value)} placeholder='Your name...' type="text" />
                {
                    alertWarning ? <h3><VscWarning/> Input fields are empty!</h3> : null
                }
            </div>
            <button onClick={submitBtn}>Confirm</button>
        </section>
    )
}

export default Register