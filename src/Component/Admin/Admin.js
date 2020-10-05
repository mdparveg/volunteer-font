import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
import logo from '../Resource/logos/lg.png'

const Admin = () => {
    const [admin, setAdmin] = useState([])
    const [del, setDel] = useState(false)
    
    useEffect(() => {
        fetch('http://localhost:5000/adminTask')
        .then(res => res.json())
        .then(data => setAdmin(data))
    }, [del])
    console.log(admin);
    const cancelEvent = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            setDel(!del)
        })
        console.log('btn click', id);
    }
    return (
        <div>
               <Link to="/" ><img src={logo} width="400" height="100px" alt=""/></Link>
           
            <h1>Volunteer Register list</h1>
        <Link to='/admin'> <button>Volunteer Register list</button></Link>
            <br/>
            <Link to='/addEvent'>  <button>Add event</button></Link>
            <div>
            
                {
                    admin.map(event => <li key={event._id}>
                        {event.name} - {event.email} - {event.date} - {event.eventName} - <button className="mt-3 btn-danger" onClick={() => cancelEvent(event._id)}>Delete</button>
                    </li>)
                }
            </div>
        </div>
    );
};

export default Admin;