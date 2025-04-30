import React from 'react'

const Canvas = (props) => {

    React.useEffect(() => {
      props.drawMeme();
    }, [props.imgUrl, props.topText, props.bottomText, props.topX, props.topY, props.bottomX, props.bottomY]);

  return (
    <>
    <canvas ref={props.canvasRef} />
    </>
  )
}

export default Canvas;