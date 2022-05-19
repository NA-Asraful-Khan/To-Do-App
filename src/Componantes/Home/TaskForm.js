import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import useData from '../../Hook/dataLoad';


const TaskForm = () => {
    const [items, setItem] = useData();
    
    const hadleTaskSubmit=event=>{
        const taskName = event.target.name.value;
        const description = event.target.description.value;
        const task = {taskName, description}
        console.log(taskName,description)
        
        fetch('http://localhost:5000/list',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        }) 

        

        
        event.target.reset();
    }
    return (
        <div>
            <Form className='w-50 mx-auto rounded border p-5 text-start' onSubmit={hadleTaskSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Task Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name='description' type="text" placeholder="Description" />
                </Form.Group>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </Form>
        </div>
    );
};

export default TaskForm;