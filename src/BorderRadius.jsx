import React from 'react'
import { useState } from 'react';
function BorderRadius() {
    const [topLeft, setTopLeft] = useState(0);
    const [topRight, setTopRight] = useState(0);
    const [bottomLeft, setBottomLeft] = useState(0);
    const [bottomRight, setBottomRight] = useState(0);
    const [width , setWidth] = useState(400) ;
    const [height , setHeight] = useState(350) ;
    const style = {
        // borderRadius: `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`,
        borderStyle: 'solid',
        backgroundColor: 'lightblue',
        color: '#1a1a1a',
        width:width,
        height:height,
    };
  return (
    <div style={style}>BorderRadius</div>
  )
}

export default BorderRadius