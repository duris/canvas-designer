import Canvas from "../components/Canvas"
import { useEffect, useState } from "react"


const Home = () => {

  const [canvasCount, setCanvasCount] = useState([])
  const [defaultColor, setDefaultColor] = useState('#2db2a7')

  useEffect(() => {
    setCanvasCount([3,2,3,4,3,2,3,4])

  }, [])

  const createNewCanvas = () => {
    defaultColor === '#2db2a7'?
    setDefaultColor('#43b22d'):
    setDefaultColor('#2db2a7')
    setCanvasCount( [3,2,3,4,3,2,3,4,3,2,3,4,3,2,3,4,])
  }

  return(
    <div >
      <button onClick={createNewCanvas}>Add Canvas</button>
      <div className=" grid grid-cols-4 p-4">
        {canvasCount.map(canvas =>
        <div className=" border float-left hover:bg-gray-50 cursor-pointer">
          <Canvas x={canvas*25} y={canvas*25} w={140} h={140} bg={defaultColor} />
        </div>
          )}
      </div>
    </div>
  )
}

export default Home