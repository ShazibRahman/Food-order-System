import claases from './Card.module.css'

const Card = (props) => {
    return <div className={claases.card}> {props.children}</div>


}


export default Card