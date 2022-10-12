import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const draw = ctx => {
    ctx.fillStyle = props.bg
    ctx.beginPath()
    ctx.arc(props.x, props.y, 30, 0, 10*Math.PI)
    ctx.fill()
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    //Our draw come here
    draw(context)
  }, [draw])
  
  return <canvas 
          ref={canvasRef} 
          {...props} 
          height={props.h} 
          width={props.w} 
          />
}

export default Canvas