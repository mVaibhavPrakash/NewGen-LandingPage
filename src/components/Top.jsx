import Image from "./Image"
import '../css/Top.css'

const Top = () => {
    return (
        <div id="top">
            <div id="top1-content">
                <p>Create interactive blog using Markdowns</p>
                <button id="top1-button">Submit</button>
            </div>
        <Image clas='image-right' src='../../public/img/image.webp' width='85%' height='100%'/>
        </div>
    )
}

export default Top
