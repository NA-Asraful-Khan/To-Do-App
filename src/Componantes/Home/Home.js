import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import useData from '../../Hook/dataLoad';
import TaskForm from './TaskForm';
import TODOTABLE from './TODOTABLE';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [items, setItem] = useData();

    let complete = false;

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            const url = `https://dry-spire-70465.herokuapp.com/list/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItem(remaining);

                    }
                })
        }
    }
    const handleComplete = () => {
        toast("Task Completed");
    
    }

    return (
        <div>
            <h1>Your TO DO List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task Name</th>
                        <th colSpan={2}>Task Description in Detail's</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        items.map(item =>
                            <tr key={item._id}>
                                <td>*</td>
                                <td>{item.taskName}</td>
                                <td colSpan={3}>{item.description}</td>
                                <td>
                                    <button className={`btn mx-2 btn-success`} onClick={handleComplete}>Complete</button>
                                    <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete</button>

                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <h2>Add Your Task</h2>
            <TaskForm></TaskForm>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default Home;