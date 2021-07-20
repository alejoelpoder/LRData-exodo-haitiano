import './style.css'
import Titulo from '../titulo'
import Card from '../card'

const Main = () => {
    return (
        <div className="screen">
            <div className="container">
                <Titulo />
                <div className="cardContainer">
                    <Card imagen={"https://origin.cronosmedia.glr.pe/large/2021/07/20/lg_60f6f5a29a409932e828320d.jpg"} titulo={'Un sueño incomprendido: volver al rincón del que tantos solo quieren irse'} link={'https://data.larepublica.pe/sueno-incomprendido-volver-al-rincon-del-que-tantos-quieren-irse/'} />
                    <Card imagen={"https://origin.cronosmedia.glr.pe/large/2021/07/20/lg_60f6f521f4d29b6b1d28096b.jpg"} titulo={'Iñapari, la otra frontera agresiva'} link={'https://data.larepublica.pe/inapari-la-otra-frontera-agresiva/'} />
                </div>
            </div>
        </div>
    )
}

export default Main;