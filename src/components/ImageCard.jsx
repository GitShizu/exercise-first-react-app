import './ImageCard.css'

const ImageCard = ({ url, alt, caption }) => {
    return (
        <figure className="card">
            <img src={url} alt={alt} />
            <p>{caption}</p>
        </figure>
    )
}
export default ImageCard
