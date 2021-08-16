import cls from './Loader.module.css'

const Loader = () => {
    return (
        <section className={cls.loading_container}>
           <div className={cls.lds_ring}><div></div><div></div><div></div><div></div></div>
        </section>
    )
}

export default Loader