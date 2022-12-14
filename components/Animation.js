// Animation.jsx
import React, { useRef } from 'react'

const Animation =() => {
  
  const canvasRef = useRef(null)
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(170, 50, 30 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };
  
  return <canvas style={{ width: '700px' }} ref={canvasRef} />;
}

export default Animation