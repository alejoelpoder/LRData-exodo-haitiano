import './style.css'

const Footer = () => {
    return (
        <div className="footer">
            <p className="bold first">Este reportaje se realizó gracias a la beca otorgada por Fundación Gabo y ACNUR.</p>
            <div><p className="bold">Redacción:&nbsp;</p><span>Luis Páucar</span></div>
            <p>&#169; Grupo La República</p>
            <p className="last">Todos los derechos reservados</p>
        </div>
    )
}

export default Footer;