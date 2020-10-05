import React, { useContext, useEffect, useState } from 'react';
import EventDetails from '../EventDetails/EventDetails';
import { UserContext } from '../../App';
import MainNav from '../MainNav/MainNav';

const Home = () => {
    const {event, setEvent} = useContext(UserContext);
    useEffect(()=> {
        fetch('http://localhost:5000/event')
        .then(res => res.json())
        .then(data => setEvent(data))
    }, [])
    return (
        <div  className="container">
            <MainNav></MainNav>
        <div className="row">
        {
            event.map(event => (<EventDetails key={event._id} events={event}></EventDetails>))
        }
        </div>
        </div>
    );
};

export default Home;