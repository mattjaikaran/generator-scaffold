import Image from 'next/image'
import { Carousel } from 'react-bootstrap'
 
const CustomCarousel = (props) => {
  const { imgArray } = props
  const renderCarouselImages = () => {
    return imgArray.map((img) => {
      return (
        <Carousel.Item>
          <Image
            className="d-block w-100"
            width={600}
            height={400}
            layout="responsive"
            src={img.imgUrl}
            alt={img.caption || `Carousel Image ${img.id}`}
          />
          {img.caption && (
            <Carousel.Caption>
              <h3>{img.caption}</h3>
              {img.subCaption && <p>{img.subCaption}</p>}
            </Carousel.Caption>
          )}
        </Carousel.Item>
      )
    })
  }
  return (
    <Carousel>
      {renderCarouselImages()}
    </Carousel>
  )
}

export default CustomCarousel