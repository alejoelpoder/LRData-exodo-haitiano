import './style.css'
import {
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon
  } from "react-share";

const Header = () => {
    
    return (
        <header>
            <div className="top-header">
                <div>
                    <a className="a-header" href="https://larepublica.pe/">
                        <p className="logo-desktop">
                            <img className="logoImg" src="https://origin.cronosmedia.glr.pe/large/2021/07/20/lg_60f6f3d9ee668e14ff3f25cf.jpg" alt="logo de data LR" />
                        </p>
                        <p className="hidden">
                            <img src="https://origin.cronosmedia.glr.pe/large/2021/07/20/lg_60f6f3d9ee668e14ff3f25cf.jpg" alt="logo de data LR" />
                        </p>
                    </a>
                    <div className="right">
                        <span>
                            <FacebookShareButton
                                url={"https://data.larepublica.pe/exodo-haitiano-en-sudamerica-otra-tragedia-humanitaria/"}
                                title={"Éxodo haitiano en Sudamérica, otra tragedia humanitaria | La Republica"}
                                description={"Rony Caned y su familia languidecen en la frontera entre Brasil y Perú. El tránsito de haitianos hacia Sudamérica ha generado una red consolidada de traficantes de migrantes."}
                                className="btn-tw btn-Social"
                                id="id-btn-fb">
                                <FacebookIcon
                                size={43}
                                round />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://data.larepublica.pe/exodo-haitiano-en-sudamerica-otra-tragedia-humanitaria/"}
                                title={"Éxodo haitiano en Sudamérica, otra tragedia humanitaria | La Republica"}
                                description={"Rony Caned y su familia languidecen en la frontera entre Brasil y Perú. El tránsito de haitianos hacia Sudamérica ha generado una red consolidada de traficantes de migrantes."}
                                className="btn-tw btn-Social"
                                id="id-btn-fb">
                                <TwitterIcon
                                size={43}
                                round />
                            </TwitterShareButton>
                            <WhatsappShareButton
                                url={"https://data.larepublica.pe/exodo-haitiano-en-sudamerica-otra-tragedia-humanitaria/"}
                                title={"Éxodo haitiano en Sudamérica, otra tragedia humanitaria | La Republica"}
                                description={"Rony Caned y su familia languidecen en la frontera entre Brasil y Perú. El tránsito de haitianos hacia Sudamérica ha generado una red consolidada de traficantes de migrantes."}
                                className="btn-tw btn-Social"
                                id="id-btn-fb">
                                <WhatsappIcon
                                size={43}
                                round />
                            </WhatsappShareButton>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
