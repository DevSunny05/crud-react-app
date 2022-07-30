import React, { useState } from "react";
import  axios  from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history=useNavigate()

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked')
    axios.post("https://62e29e20b54fc209b87d27a0.mockapi.io/crud", {
      name: name,
      email: email,
      
    },header)
    .then(()=>{
        history('/read')
    })
  };
  return (
    <>
      <form className="mx-5 my-5">
        <div className="d-flex justify-content-between">
            <h2>Create</h2>
            <Link to='/read'>
                 <button className="btn btn-primary">Show Data</button>
            </Link>
           
        </div>
        <div className="mb-3 ">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
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
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
