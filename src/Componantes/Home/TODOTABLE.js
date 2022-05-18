import React from 'react';
import { Table } from 'react-bootstrap';

const TODOTABLE = ({item}) => {
    return (
        <div>
                <td>1</td>
                <td>{item.carName}</td>
                <td colSpan={3}>{item.company}</td>
        </div>
    );
};

export default TODOTABLE;