import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/Card.css'

const Card = ({obj}) => {
    return (
        <div className='card'>
            <FontAwesomeIcon className='card-icon' icon={obj.icon}/>
            <div className="card-title">{obj.title}</div>
            <p className="card-content">{obj.content}</p>
        </div>
    )
}

export default Card
