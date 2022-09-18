import React from "react";

const List = ({toDo, setToDo}) => {
    const Checked = (item) => {
        item.markedChecked = !item.markedChecked
        let updateChecked = [...toDo]
        setToDo(updateChecked)
    }

    const Style = (markedChecked) => {
        if(markedChecked === true){
            return 'line'
        }
        else{
            return 'noLine'
        }
    }

    const deleteItem = todoNum => {
        setToDo(toDo.filter((item, index) => todoNum !== index))
    }

    return(
        <div>
            {
                toDo.map((item, index) => (
                    <div key={index} className='pt-4 d-flex d-inline justify-content-around'>
                        <div className="d-flex d-inline">
                            <p className={Style(item.markedChecked)}>{item.itemContent}</p>
                            <input 
                                type="checkbox" 
                                onChange={(e) => Checked(item)}
                                className="form-check-input mx-3"
                            />
                        </div>
                        <button className='btn btn-danger btn-sm' onClick={(e) => deleteItem(index)}>Remove</button>
                    </div>
                ))
            }
        </div>
    )
}

export default List;