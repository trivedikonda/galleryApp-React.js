// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateActiveImageId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickThumbnailItem = () => {
    updateActiveImageId(id)
  }

  const thumbnailClassName = isActive
    ? 'each-thumbnail'
    : 'thumbnail-opacity-hidden'

  return (
    <li onClick={onClickThumbnailItem}>
      <button type="button" className={`each-thumbnail ${thumbnailClassName}`}>
        <img className="image" src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
