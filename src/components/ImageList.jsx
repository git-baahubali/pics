import React from 'react'
import ImageShow from './ImageShow'

function ImageList(props) {

  console.log(props.img)
  const ListOfImageComponents = props.img.map((x) => {
    const {
      urls: { small_s3: imageLink },
    } = x
    return <ImageShow imgUrl={imageLink} />
  })
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        border: '2px solid blue',
        maxWidth: '50%',
        padding:'1rem'
      }}
    >
      {ListOfImageComponents}
    </div>
  )
}

export default ImageList
