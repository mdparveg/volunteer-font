import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import MainNav from '../MainNav/MainNav';



const Task = () => {
    const [tasks, setTasks] = useState([]);
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [del, setDel] = useState(false)

    useEffect(() => {
        fetch('https://boiling-escarpment-78979.herokuapp.com/task?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [del])

    const cancelEvent = (id) => {
        fetch(`https://boiling-escarpment-78979.herokuapp.com/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                setDel(!del)
            })
        }

    return (
        <div className="container">
            <MainNav></MainNav>
            {
                tasks.map(task => <div key={task._id} className="container">
                    <Row>
                        <Col md={6} xs={6}>
                            <div className="row d-flex justify-content-right">
                                <div className="col-md-5">
                                    <img className="card-img" src={task.image} alt="" />
                                </div>
                                <div className="col-md-7">
                                    <h4>{task.eventName}</h4>
                                    <p>{task.date}</p>
                                    <button onClick={() => cancelEvent(task._id)} className="btn btn-danger">Cancel</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>)
            }
        </div>
    );
};

export default Task;