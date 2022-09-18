import React, {useState} from 'react';

const Create = ({toDo, setToDo}) => {
    const [item, setItem] = useState('');

    const createItem = (e) => {
        e.preventDefault()
        setToDo([...toDo, {itemContent: item, markedChecked: false,}])
        setItem('')
    }

    return(
        <form onSubmit={createItem} className='form mx-auto text-start'>
            <div className='form-group col-lg-4 m-4'>
                <input 
                    type="text"
                    className='form-control'
                    placeholder='Enter A To-Do Item!'
                    value={item} onChange = {(e) => setItem(e.target.value)}
                />
            </div>
            <button className='btn btn-primary mt-3 mx-4'>Add!</button>
        </form>
    )
}

export default Create;