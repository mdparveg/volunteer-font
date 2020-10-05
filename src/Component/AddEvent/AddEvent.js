import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Resource/logos/lg.png'
import { useForm } from "react-hook-form";

const AddEvent = () => {
   

    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
       const formData = new FormData();
       const js = JSON.stringify(data)
    formData.append("data", js)
    formData.append('file', data.file[0]); 
    fetch('http://localhost:5000/addEvent',{
        method: "POST",
        body: formData
        })
      console.log(data);
  }
    // const newEvent = (e) => {
    //     e.preventDefault();
    //     fetch('http://localhost:5000/addEvent',{
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify()
    //     })
    // }
    return (
        <>
         <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true })} />
      <input name="lastName" ref={register({ required: true })} />
      <input type="file" ref={register} name="file" />
      <input type="submit" />
    </form>


        {/* <div className="container">
           <h1>Add Event</h1>

            <div className="row">
                <div className="col-md-2">
                <img src={logo} width="400" height="100px" alt=""/>
           
       <Link to='/admin'> <button>Volunteer Register list</button></Link>
           <br/>
           <Link to='/addEvent'>  <button>Add event</button></Link>
                </div>
            
            
            <div className="col-md-8">
                <form onSubmit={newEvent}>
                Event Title
                <input type="text" id="name" name="name" />
                Event Date
                <input type="date" id="date" name="date" />
                <br/>
                Description
                <input type="text" id="description" name="description" />
                Banner
                <input id="file" type="file"/>
                <button type="submit">Add Event</button>
                </form>
            </div>
            </div>
          
        </div> */}
        </>
    );
};

export default AddEvent;