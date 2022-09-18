import React from 'react';

const Box = ({boxColor}) =>{
    // const {boxColor} = props;

    return(
        <div>
            {
                boxColor.map((color, index) => (
                    <div key={index} style={{
                        display: 'inline-block',
                        height: '100px',
                        width: '100px',
                        margin: '20px',
                        backgroundColor: color,
                    }}>
                    </div>
                ))
            }
        </div>
    )
}


export default Box