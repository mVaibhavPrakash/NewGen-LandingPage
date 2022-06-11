import { useSelector,useDispatch } from "react-redux"
import { setProfileCreated } from "../../../../redux/slices/authSlice"
import Image from "./Image"
import img from '../../../../../public/img/image.png'
import '../css/Top.css'

const Top = () => {
    const isProfile=  useSelector(state => state.auth.profileCreated);
    const dispatch = useDispatch();
    console.log(isProfile+'ss')
    return (
        <div id="lpage-top">
            <div id="lpage-top1-content">
                <p id='lpage-top1-p'>Create interactive blog using Markdowns</p>
                <p id='lpage-top1-para'>Express your idea in form of blog</p>
                <button className="lpage-top1-button" onClick={() => dispatch(setProfileCreated())}>Create</button>
            </div>
        <Image clas='lpage-image-right' src={img} width='100%' height='100%'/>
        </div>
    )
}

export default Top
