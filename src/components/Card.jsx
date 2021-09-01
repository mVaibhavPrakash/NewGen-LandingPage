import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMarkdown,faReact} from '@fortawesome/free-brands-svg-icons'
import {faAd,faDraftingCompass} from '@fortawesome/free-solid-svg-icons'

const Card = ({obj}) => {
    return (
        <div className='card'>
            <span className='card-span'><FontAwesomeIcon icon={obj.icon}/></span>
            <div className="card-title">{obj.title}</div>
            <p className="card-content">{obj.content}</p>
        </div>
    )
}

export default Card
