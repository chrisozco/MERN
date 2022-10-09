import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const AuthorList = () => {
    const [allAuthors, setAllAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            console.log(res)
            setAllAuthors(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res)
            const newList = allAuthors.filter((author) => {
                return author._id !== id
            })
            setAllAuthors(newList)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div className='bg-dark'>
            <div className='bg-dark text-light'>
            <h1>Favorite Authors</h1>
            <Link to={'/newAuthor'}>Add an Author</Link>
            </div>
            <hr />
            <div>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allAuthors.map((author, index) => {
                            return (
                                <tr key={index}>
                                    <td>{author.firstName} {author.lastName}</td>
                                    <td className='d-flex justify-content-around'>
                                        <Link to={`/editAuthor/${author._id}`}><button className='btn btn-primary btn-sm'>Edit</button></Link>
                                        <button className='btn btn-danger btn-sm' onClick={(e) => deleteHandler(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AuthorList