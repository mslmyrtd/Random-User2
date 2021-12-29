import React from 'react';
import { Table } from 'react-bootstrap';


const Tables = ({age, first, last, email, phone, addTable}) => {
    console.log(age);
    console.log(addTable);
    return (
        <div>
            <Table striped bordered hover className='table'>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>{first +" "+ last}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{age}</td>
                </tr>
               
            </tbody>
        </Table>
        </div>
    );
};

export default Tables;
