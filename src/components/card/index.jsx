import './style.css'


const Card = ({ imagen, titulo, link }) => {
    return (
        <a href={link}>
            <div className="card">
                
                    <img src={imagen} alt="carta" />
                    <h2>{titulo}</h2>
                
            </div>
        </a>
    )
}

export default Card;