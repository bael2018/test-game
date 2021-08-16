import cls from './App.module.css'
import Routes from './components/routes'

const App = () => {
    const name = JSON.parse(localStorage.getItem('userName'))

    return (
        <section className={cls.root}>
            <Routes user={name}/>
        </section>
    )   
}

export default App