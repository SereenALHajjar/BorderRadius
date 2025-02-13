import React from 'react'
import { useState } from 'react';
function BorderRadius(props) {
    const [topLeft, setTopLeft] = useState(0);
    const [topRight, setTopRight] = useState(0);
    const [bottomLeft, setBottomLeft] = useState(0);
    const [bottomRight, setBottomRight] = useState(0);
    const style = {
        borderRadius: `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`,
        borderStyle: 'solid',
        backgroundColor: 'lightblue',
        color: '#1a1a1a',
        width: props.width,
        height: props.height,
        position: 'relative',
        margin: '50px auto'
    };
    const topRightStyle = {
        appearance: 'slider-vertical',
        transform: 'rotate(180deg)',
        width: 2,
        height: props.height,
        position: 'absolute',
        margin: 0,
        top: 0,
        right: -20,////////////
    };
    const topLeftStyle = {
        width: props.width,
        height: 2,
        position: 'absolute',
        margin: 0,
        top: -20,
        left: 0
    };
    const bottomLeftStyle = {
        appearance: 'slider-vertical',
        transform: 'rotate(180deg)',
        width: 2,
        height: props.height,
        margin: 0,
        position: 'absolute',
        bottom: 0,
        left: -20 ///////////////
    };
    const bottomRightStyle = {
        width: props.width,
        height: 2,
        margin: 0,
        position: 'absolute',
        bottom: -20,
        right: 0
    };
    const copyToClipboard = () => {
        navigator.clipboard.writeText(cssCode)
          .then(() => alert('CSS code copied to clipboard!'))
          .catch(() => alert('Failed to copy CSS code.'));
      };
    const cssCode = `border-radius: ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%;`;
    return (
        <>
            <div style={style}>
                
                <input
                    type='range'
                    min='0'
                    max='100'
                    value={topLeft}
                    onChange={(e) => { setTopLeft(Number(e.target.value)) }}
                    style={topLeftStyle} />

                <input
                    type='range'
                    min='0'
                    max='100'
                    value={topRight}
                    onChange={(e) => { setTopRight(Number(e.target.value)) }}
                    style={topRightStyle} />
                <input
                    type='range'
                    min='0'
                    max='100'
                    value={bottomLeft}
                    onChange={(e) => { setBottomLeft(Number(e.target.value)) }}
                    style={bottomLeftStyle} />
                <input
                    type='range'
                    min='0'
                    max='100'
                    value={bottomRight}
                    onChange={(e) => { setBottomRight(Number(e.target.value)) }}
                    style={bottomRightStyle} />
            </div>
            <code style={{ display: 'block', margin: '10px 0', fontSize: '16px' }}>
                    {cssCode}
                </code>
                <button
                onClick={copyToClipboard}
                    style={{
                        padding: '10px 20px',
                        fontSize: '0.8rem',
                        backgroundColor: 'lightblue',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Copy CSS
                </button>
        </>
    )
}

export default BorderRadius