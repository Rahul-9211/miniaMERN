
import React, { useState } from "react"
import { Map, Marker } from "pigeon-maps"

 function PigeonMap() {
    const [hue, setHue] = useState()
    const color = `hsl(${hue % 360}deg 39% 70%)`
  return (
    <Map height={300} defaultCenter={[21.7679, 78.871]} defaultZoom={4} boxClassname="h-100 sales_card" >
      <Marker width={50} anchor={[21.7679, 78.871]}
      
      color={color} 
      onClick={() => setHue(hue + 20)}  />
    </Map>
  )
}
export default PigeonMap;

