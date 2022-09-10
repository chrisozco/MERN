import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const createUser = (e) => {
        e.preventDefault();
        const newUser ={firstName, lastName, email, password};
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirm('')
        console.log(newUser)
    };

    return(
        <div>
            <form className='form mx-auto text-start' onSubmit={createUser}>
                <div>
                    <label className='form-label'>First Name: </label>
                    <input type="text" className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    {
                        firstName && firstName.length < 2 ? <p className='alert alert-danger'>First Name must be more than 2 characters!</p> : null
                    }
                </div>
                <div>
                    <label className='form-label'>Last Name: </label>
                    <input type="text" className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    {
                        lastName && lastName.length < 2 ? <p className='alert alert-danger'>Last Name must be more than 2 characters!</p> : null
                    }
                </div>
                <div>
                    <label className='form-label'>Email: </label>
                    <input type="text" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    {
                        email && email.length < 5 ? <p className='alert alert-danger'>Email must be more than 5 characters!</p> : null
                    }
                </div>
                <div>
                    <label className='form-label'>Password: </label>
                    <input type="text" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {
                        password && password.length < 8 ? <p className='alert alert-danger'>Password must be more than 8 characters!</p> : null
                    }
                </div>
                <div>
                    <label className='form-label'>Confirm Password: </label>
                    <input type="text" className='form-control' value={confirm} onChange={(e) => setConfirm(e.target.value)}/>
                    {
                        password !== confirm ? <p className='alert alert-danger'>Passwords must match!</p> : null
                    }
                </div>
                <button className='btn btn-primary mt-4'>Register</button>
            </form>
        </div>
    );
}

export default Form;