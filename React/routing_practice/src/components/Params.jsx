import React from "react";
import { useParams } from "react-router-dom";

const Params = (props) =>{
    const {word, color, bgc} = useParams()
    return(
        <div>
            {
                isNaN(word)?
                <h1 style={{color: color, backgroundColor: bgc}}>The word is... {word}!</h1>
                :
                <h1>The number is... {word}!</h1>
            }
        </div>
    )
}

export default Params;
