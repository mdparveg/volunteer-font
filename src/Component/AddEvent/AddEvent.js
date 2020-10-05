import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import logo from '../Resource/logos/lg.png'


const AddEvent = () => {


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        const js = JSON.stringify(data)
        formData.append("data", js)
        formData.append('file', data.file[0]);
        fetch('https://boiling-escarpment-78979.herokuapp.com/addEvent', {
            method: "POST",
            body: formData
        })
    }

    return (
        <>
            <div className="container">
                <Link to="/" ><img src={logo} width="400" height="100px" alt="" /></Link>
            </div>
            <div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    Event Title
                    <input type="text" name="name" ref={register({ required: true })} />
                    Event Date
                    <input type="date" name="date" ref={register({ required: true })} />
                                    <br />
                    Description
                    <input type="text" name="Description" ref={register({ required: true })} />
                    <input type="file" ref={register} name="file" />
                    <input type="submit" />
                </form>

            </div>
        </>
    );
};

export default AddEvent;