import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/Card.css'

const Card = ({obj}) => {
    return (
        <div className='lpage-card'>
            <FontAwesomeIcon className='lpage-card-icon' icon={obj.icon}/>
            <div className="lpage-card-title">{obj.title}</div>
            <p className="lpage-card-content">{obj.content}</p>
        </div>
    )
}

export default Card
