import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMarkdown,faReact} from '@fortawesome/free-brands-svg-icons'
import {faAd,faDraftingCompass} from '@fortawesome/free-solid-svg-icons'
import '../css/Card.css'

const Card = ({keey,obj}) => {
    return (
        <div className='card' key={keey}>
            <FontAwesomeIcon className='card-icon' icon={obj.icon}/>
            <div className="card-title">{obj.title}</div>
            <p className="card-content">{obj.content}</p>
        </div>
    )
}

export default Card
