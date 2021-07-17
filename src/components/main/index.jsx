import './style.css'
import background from '../../img/FOTO-PORTADA.JPG'
import cap1 from '../../img/FOTO-ABRE-INFORME.jpg'
import cap2 from '../../img/FOTO-ABRIDORA.jpg'
import Titulo from '../titulo'
import Card from '../card'

const Main = () => {
    return (
        <div className="screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="container">
                <Titulo />
                <div className="cardContainer">
                    <Card imagen={cap1} titulo={'Capítulo 1: Un sueño incomprendido: volver al rincón del que tantos solo quieren irse'} link={'#'} />
                    <Card imagen={cap2} titulo={'Capítulo 2: Iñapari, la otra frontera agresiva'} link={'#'} />
                </div>
            </div>
        </div>
    )
}

export default Main;