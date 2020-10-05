import React, { useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Logo from '../Logo/Logo';
import logo from '../Resource/logos/lg.png'
import './Registration.css'

const Registration = () => {
    const {id} = useParams();
    const {event} = useContext(UserContext);
    const eventReg = event.find(ev => ev._id === id);
    const {image} = eventReg;
    console.log(eventReg);

    const history = useHistory()

    //from submit
    const handleSubmit = (e) => {
    const date = document.getElementById("date").value;
    const desicription = document.getElementById("desicription").value
        e.preventDefault();
        const reg = {...loggedInUser, eventName: eventReg.name, date:date, desicription: desicription, image: image}
        fetch('http://localhost:5000/reg',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reg)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                history.push("/task")
            }
        })
        console.log('btn click', reg);
    }
    const {loggedInUser} = useContext(UserContext);
    const {name, email} = loggedInUser;

    return (
        <div className="registration_div">
           <Link to="/"> <Logo></Logo></Link>
            <form className="registration_form" onSubmit={handleSubmit}>
                <h3>Register as a Volunteer</h3>
                <input required type="text" defaultValue={name} name="name" placeholder="Full Name" />
                <br/>
                <input required type="email" defaultValue={email} name="email" placeholder="Username or Email" />
                <br/>
                <input required type="date" id="date" name="date"  placeholder="date" />
                <br/>
                <input required type="text" id="desicription" name="desicription" placeholder="desicription" />
                <br/>
                <input required type="text" defaultValue={eventReg.name} placeholder="name" name="name" />
                <br/>
                <button type="submit">Registration</button>
               
            </form>
            
        </div>
    );
};

export default Registration;