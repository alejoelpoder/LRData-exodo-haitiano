import './style.css'

const Header = () => {
    return (
        <header>
            <div className="top-header">
                <div>
                    <a className="a-header" href="https://larepublica.pe/">
                        <p className="logo-desktop">
                            <img src="https://cdn.glitch.com/1d2631d6-1465-47bf-9526-2bb682cb73f6%2F739e882a-80b6-44f7-b984-8785e1b0feb3_logo_blanco%20(1).png?v=1605290247076" alt="logo de especiales LR" />
                        </p>
                        <p className="hidden">
                            <img src="https://cdn.glitch.com/1d2631d6-1465-47bf-9526-2bb682cb73f6%2F739e882a-80b6-44f7-b984-8785e1b0feb3_logo%20(1).png?v=1605290186646" alt="logo de especiales LR" />
                        </p>
                    </a>
                    <div className="right">
                        <span>
                            <a id="id-btn-fb" className="btn-fb btn-Social" data-social="facebook" href="javascript:void(0)" id="id-btn-fb" rel="noopener"></a>
                            <a id="id-btn-twt" className="btn-twt btn-Social" data-social="twitter" href="javascript:void(0)" id="id-btn-twt" rel="noopener"></a>
                            <a id="id-btn-wsp" className="btn-wsp" href="https://api.whatsapp.com/send?text=Sus agresores las acechan en las calles y en las redes sociales mientras ellas esperan que los operadores de justicia determinen si fueron víctimas de violencia de género en línea. #PerseguidasEnLinea https://especiales.larepublica.pe/violencia-de-genero-perseguidas-en-linea-lrdata/?fbclid=IwAR1HZ7w_ZKBPwqxSFHNF7067zYv596i5pyirsJ07EdHLxRB_-PItR4W8AnU" id="id-btn-wsp" rel="noopener" target="_blank"></a>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
