import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');


    return(
        <div>
            <form className='col-12 bg-dark p-4 my-5 mx-auto text-light'>
                <div className='d-flex justify-content-between text-start'>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className='d-flex justify-content-between text-start'>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className='d-flex justify-content-between text-start'>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='d-flex justify-content-between text-start'>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='d-flex justify-content-between text-start'>
                    <label>Confirm Password: </label>
                    <input type="text" value={confirm} onChange={(e) => setConfirm(e.target.value)}/>
                </div>
            </form>
            <div className='col-12 p-4 my-5 mx-auto bg-dark text-light text-start'>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm}</p>
            </div>
        </div>
    );
}


export default Form;