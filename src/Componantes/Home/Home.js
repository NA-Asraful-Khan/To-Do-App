import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import TODOTABLE from './TODOTABLE';

const Home = () => {
    const [items, setItem] = useState([]);

    useEffect(() => {
        fetch(`data.json`)
            .then(response => response.json())
            .then(data => setItem(data));
    }, []);

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
                            <td>1</td>
                            <td>{item.taskName}</td>
                            <td colSpan={3}>{item.description}</td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>

    );
};

export default Home;