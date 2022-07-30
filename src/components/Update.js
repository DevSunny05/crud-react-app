import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Update = () => {
    const [id,setId] = useState(0)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const  navigate=useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
    },[])

    const handleUpdate=(e)=>{
        e.preventDefault()
        axios.put(`https://62e29e20b54fc209b87d27a0.mockapi.io/crud/${id}`,
        {name:name,
        email:email}
        ).then(()=>{
            navigate('/read');
        })
    }
  return (
    <>

   
    <form className="mx-5">
    
        <h2>Update</h2>
        <div className="mb-3 ">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={name}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 ">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary "
          onClick={handleUpdate}
        >
          Update
        </button>

        <Link to='/read'>
            <button className="btn btn-primary mx-2 ">
            Back
            </button>

        </Link>
        
      </form>

    </>
  )
}

export default Update