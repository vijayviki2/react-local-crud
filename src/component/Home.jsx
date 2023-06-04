
import React, { useEffect, useState } from "react";
import { deleteTask, readAllTask } from "../data/task";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
    const [tasks, setTasks ] = useState([])
    useEffect(() => {
    const data = readAllTask
    //  console.log('tasks =', data);
    setTasks(data);
    },[])

    const deleteHandler = async (id) => {
        try {
            if(window.confirm(`Are you sure to delete task id=${id}`)) {
                await deleteTask(id)
            } else {
                toast.warning("delete terminated")
            }
        } catch (err) {
            toast.error(err.message)
        }
    } 

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-dark">Home</h3>
                </div>
            </div>

            <div className="row">
                {
                    tasks && tasks.map((item,index) => {
                        return (
                            <div className="col-md-4 mt-2" key={index}>
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="text-success text-center"> {item.title} </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <strong>Start Date</strong>
                                                <span className="text-success float-end"> {item.start} </span>
                                            </li>
                                            <li className="list-group-item">
                                                <strong>End Date</strong>
                                                <span className="text-success float-end"> {item.end} </span>
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Description</strong>
                                                <span className="text-success float-end"> {item.desc} </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <NavLink to={`/update/${item.id}`} className="btn btn-info"><i className="bi bi-pencil"></i></NavLink>
                                        <button onClick={() => deleteHandler(item.id)} className="btn btn-danger float-end"><i className="bi bi-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default Home