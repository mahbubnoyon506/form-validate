import React, { useState } from 'react';
import { ErrorMessage, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
const Form = () => {

  const [formdata, setFormdata] = useState([])

  const [clear, setClear] = useState('')

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      gender: '',
      mobile: '',
      govId: '',
      govid: '',
      guardianType: '',
      guardian: '',
      guardianEmail: '',
      emergencyNumber: '',
      address: '',
      state: '',
      city: '',
      country: '',
      pincode: '',
      occupation: '',
      relagion: '',
      maritialStatus: '',
      blood: '',
      nationality: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, "Max 15 character allowed").required('Required'),
      age: Yup.string().required('Required'),
      gender: Yup.string().required('Required'),
      mobile: Yup.string().required('Required'),
      govId: Yup.string().required('Required'),
      govid: Yup.string().required('Required'),
      guardianType: Yup.string().required('Required'),
      emergencyNumber: Yup.string().required('Required'),
      guardian: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
      pincode: Yup.string().required('Required'),
      occupation: Yup.string().required('Required'),
      relagion: Yup.string().required('Required'),
      maritialStatus: Yup.string().required('Required'),
      blood: Yup.string().required('Required'),
      nationality: Yup.string().required('Required'),
      guardianEmail: Yup.string().email('Invalid email').required('Required')
    }),
    onSubmit: (values) => {
      let storedata = {};
      localStorage.setItem('alldata', JSON.stringify(values));
      const getdata = localStorage.getItem('alldata');
      if (getdata) {
        storedata = JSON.parse(getdata);
        setFormdata(storedata)
        setClear('')
      }
    }
  })

  const { name, age, gender, mobile, govId, govid, guardianType, guardian, guardianEmail, emergencyNumber, address, state, city, country, pincode, occupation, relagion, maritialStatus, blood, nationality } = formdata;


  return (
    <div>
      <div className='border-2 p-5 m-10'>
        <form onSubmit={formik.handleSubmit}>
          <p className='text-lg font-medium underline'>Personal Details:</p>
          <div className='lg:grid grid-cols-3 gap-5'>
            <p>Name *  <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className='ml-2 border p-1 my-2' type="text" name="name" id="" placeholder='Your name' />
              {formik.errors.name ? <p className='text-error text-sm'>{formik.errors.name}</p> : ''}
            </p>
            <p>Date of birth or age <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
              className='ml-2 border p-1 my-2' type="text" name="age" id="" placeholder='Date of birth' />
              {formik.errors.age ? <p className='text-error text-sm'>{formik.errors.age}</p> : ''}
            </p>
            <p>Sex * <select
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
              className='border p-1 my-2' name="gender" id="">
              <option value="Default">Enter Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Common">Not to Mention</option>
            </select>
              {formik.errors.gender ? <p className='text-error text-sm'>{formik.errors.gender}</p> : ''}
            </p>
          </div>
          <div className='lg:grid grid-cols-2 gap-5'>
            <p>Mobile *  <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
              className='ml-2 border p-1 my-2' type="text" name="mobile" id="" placeholder='Mobile Number' />
              {formik.errors.mobile ? <p className='text-error text-sm'>{formik.errors.mobile}</p> : ''}
            </p>
            <p>Gov Issued Id * <select
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.govId}
              className='border p-1 my-2' name="govId" id="">
              <option value="Default">Enter One</option>
              <option value="Male">1</option>
              <option value="Female">2</option>
              <option value="Common">3</option>
            </select>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.govid}
                className='ml-2 border p-1 my-2' type="text" name="govid" id="" placeholder='Enter Gov ID' />
              {formik.errors.govid ? <p className='text-error text-sm'>{formik.errors.govid}</p> : ''}
            </p>
          </div>
          <p className='text-lg font-medium mt-5 underline'>Contact Details:</p>
          <div className='lg:grid grid-cols-3 gap-5'>
            <p>Guardian Detail * <select
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.guardianType}
              className='border p-1 my-2 inline' name="guardianType" id="">
              <option value="Default">Select One</option>
              <option value="Male">Father</option>
              <option value="Female">Mother</option>
              <option value="Common">Another</option>
            </select>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.guardian}
                className='ml-2 border p-1 my-2' type="text" name="guardian" id="" placeholder='Guardian Name' />
              {formik.errors.govid ? <p className='text-error text-sm'>{formik.errors.gender}</p> : ''}
            </p>
            <p>Email *  <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.guardianEmail}
              className='ml-2 border p-1 my-2' type="email" name="guardianEmail" id="" placeholder='Type Guardian Email' />
              {formik.errors.guardianEmail ? <p className='text-error text-sm'>{formik.errors.guardianEmail}</p> : ''}
            </p>
            <p>Emergency Contact<input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.emergencyNumber}
              className='ml-2 border p-1 my-2' type="text" name="emergencyNumber" id="" placeholder='Enter Emergency Number' />
              {formik.errors.emergencyNumber ? <p className='text-error text-sm'>{formik.errors.emergencyNumber}</p> : ''}
            </p>
          </div>
          <p className='text-lg font-medium mt-5 underline'>Address Details:</p>
          <div className='lg:grid grid-cols-3 gap-5'>
            <p>Address<input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              className='ml-2 border p-1 my-2' type="text" name="address" id="" placeholder='Enter Address' />
              {formik.errors.address ? <p className='text-error text-sm'>{formik.errors.address}</p> : ''}
            </p>
            <p>State<input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
              className='ml-2 border p-1 my-2' type="text" name="state" id="" placeholder='Enter Address' />
              {formik.errors.state ? <p className='text-error text-sm'>{formik.errors.state}</p> : ''}
            </p>
            <p>City<input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              className='ml-2 border p-1 my-2' type="text" name="city" id="" placeholder='Enter city' />
              {formik.errors.city ? <p className='text-error text-sm'>{formik.errors.city}</p> : ''}
            </p>
            <p>Country<input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
              className='ml-2 border p-1 my-2' type="text" name="country" id="" placeholder='Enter Country' />
              {formik.errors.country ? <p className='text-error text-sm'>{formik.errors.country}</p> : ''}
            </p>
            <p>Pincode<input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.pincode}
              className='ml-2 border p-1 my-2' type="text" name="pincode" id="" placeholder='Enter Pincode' />
              {formik.errors.pincode ? <p className='text-error text-sm'>{formik.errors.pincode}</p> : ''}
            </p>
          </div>
          <p className='text-lg font-medium mt-5 underline'>Other Details:</p>
          <div className='lg:grid grid-cols-4 gap-5'>
            <p>Ocupation<input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.occupation}
              className='ml-2 border p-1 my-2' type="text" name="occupation" id="" placeholder='Enetr Occupation' />
              {formik.errors.occupation ? <p className='text-error text-sm'>{formik.errors.occupation}</p> : ''}
            </p>
            <p>Relagion<input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.relagion}
              className='ml-2 border p-1 my-2' type="text" name="relagion" id="" placeholder='Enter Relagion' />
              {formik.errors.relagion ? <p className='text-error text-sm'>{formik.errors.relagion}</p> : ''}
            </p>
            <p>Maritial Status<input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.maritialStatus}
              className='ml-2 border p-1 my-2' type="text" name="maritialStatus" id="" placeholder='Enter Maritial Status' />
              {formik.errors.maritialStatus ? <p className='text-error text-sm'>{formik.errors.maritialStatus}</p> : ''}
            </p>
            <p>Blood Group<input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.blood}
              className='ml-2 border p-1 my-2' type="text" name="blood" id="" placeholder='Enter Blood Group' />
              {formik.errors.blood ? <p className='text-error text-sm'>{formik.errors.blood}</p> : ''}
            </p>
            <p>Nationality<input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nationality}
              className='ml-2 border p-1 my-2' type="text" name="nationality" id="" placeholder='Enter' />
              {formik.errors.nationality ? <p className='text-error text-sm'>{formik.errors.nationality}</p> : ''}
            </p>
          </div>
          <div className='flex justify-end mx-20'>
            <button 
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
            type='reset'  className='btn btn-error mr-10'>CANCEL</button>
            <input className='ml-2 btn btn-success' type="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
      <div className='m-10'>
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
              <tr class="hover">
                <td>{name}</td>
                <td>{age}</td>
                <td>{gender}</td>
                <td>{mobile}</td>
                <td>{govId}, {govid}</td>
                <td>{guardianType}, {guardian}</td>
                <td>{guardianEmail}</td>
                <td>{emergencyNumber}</td>
                <td>{address}</td>
                <td>{state}</td>
                <td>{city}</td>
                <td>{country}</td>
                <td>{pincode}</td>
                <td>{occupation}</td>
                <td>{relagion}</td>
                <td>{maritialStatus}</td>
                <td>{blood}</td>
                <td>{nationality}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Form;