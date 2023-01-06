import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';


const FormValues = () => {
    const [values, setValues] = useState([]);
    const [isLoading, setIsloading] = useState(true)
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:5000/uservalues')
            setValues(data);
            setIsloading(false)
        })()
    }, [])

    if (isLoading) {
        return <Loader />
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Contact</th>
                        <th>Gov Issued ID</th>
                        <th>Guardin</th>
                        <th>Guardin Email</th>
                        <th>Emergency Number</th>
                        <th>Address</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Pincode</th>
                        <th>Occupation</th>
                        <th>Relagion</th>
                        <th>Maritial Status</th>
                        <th>Blood</th>
                        <th>Nationality</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        values.map((value, index) =>
                            <>
                                <tr key={value._id} class="hover">
                                    <td>{index + 1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.mobile}</td>
                                    <td>{value.govId}, {value.govid}</td>
                                    <td>{value.guardianType}, {value.guardian}</td>
                                    <td>{value.guardianEmail}</td>
                                    <td>{value.emergencyNumber}</td>
                                    <td>{value.address}</td>
                                    <td>{value.state}</td>
                                    <td>{value.city}</td>
                                    <td>{value.country}</td>
                                    <td>{value.pincode}</td>
                                    <td>{value.occupation}</td>
                                    <td>{value.relagion}</td>
                                    <td>{value.maritialStatus}</td>
                                    <td>{value.blood}</td>
                                    <td>{value.nationality}</td>
                                </tr>
                            </>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FormValues;