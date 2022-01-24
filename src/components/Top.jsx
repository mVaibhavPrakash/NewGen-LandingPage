import Image from "./Image"
import img from '../../public/img/image.webp'
import '../css/Top.css'

const Top = () => {
    return (
        <div id="top">
            <div id="top1-content">
                <p id='top1-p'>Create interactive blog using Markdowns</p>
                <p id='top1-para'>Express your idea in form of blog</p>
                <button className="top1-button">Submit</button>
            </div>
        <Image clas='image-right' src={img} width='100%' height='100%'/>
        </div>
    )
}

export default Top
