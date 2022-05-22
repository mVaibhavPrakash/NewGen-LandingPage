import '../css/Image.css'

const Image = ({clas,src,width,height}) => {
    return (
        <img className={`${clas} img`} src={src} width={width} height={height} />
    )
}

export default Image
