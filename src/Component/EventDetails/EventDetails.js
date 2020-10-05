import { Card } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './EventDetails.css'

const EventDetails = (props) => {
    const { image, name, _id } = props.events;
    return (
        <div className="event_card single_event">
            <div className="col-md-3 p-3">
                <Link to={"event/" + _id}>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title className="event_title">{name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        </div>
    );
};

export default EventDetails;