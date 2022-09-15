import React, {useState} from "react";

const Form = (props) => {
    const {boxColor, setBoxColor} = props
    const [color, setColor] = useState('');
    
    const createBox = (e) => {
        e.preventDefault();
        setBoxColor([...boxColor, color])
        setColor('')
    };
    
    return (
        <div>
            <form onSubmit={createBox} className='form mx-auto col-6 text-start'>
                <div className="col-6">
                    <label className='form-label'>Color:</label>
                    <input 
                        type="text" 
                        className='form-control' 
                        placeholder="Enter A Color!"
                        value={color} onChange={(e) => setColor(e.target.value)}
                    />
                </div>
                <button className='btn btn-primary mt-3'>Create!</button>
            </form>
        </div>
    )

}


export default Form;