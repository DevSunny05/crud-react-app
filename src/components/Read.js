import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark,setTableDark]=useState('')
  function readData() {
    axios
      .get("https://62e29e20b54fc209b87d27a0.mockapi.io/crud")
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://62e29e20b54fc209b87d27a0.mockapi.io/crud/${id}`)
      .then(() => {
        readData();
      });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <>
      <div className="form-check form-switch mx-3">
        <input
        onClick={()=>{
          if(tabledark==='table-dark') setTableDark('')
          else setTableDark('table-dark')
        }}
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
      </div>

      <div className="d-flex justify-content-between my-3 mx-3">
        <h2>Read</h2>
        <Link to="/">
          <button className="btn btn-primary">Create</button>
        </Link>
      </div>
      <table className={`table mx-3 ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((ele) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{ele.id}</th>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(ele.id, ele.name, ele.email)
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(ele.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
