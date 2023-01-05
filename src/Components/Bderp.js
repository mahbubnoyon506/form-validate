import axios from 'axios';

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Bderp = () => {
    const [countryData, setCountryData] = useState([])
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [division, setDivision] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [town, setTown] = useState('');
    const [village, setVillage] = useState('');
    const [house, setHouse] = useState('');
    const [phone, setPhone] = useState('');
    const [fax, setFax] = useState('');
    const [shippingAddress, setShippingAddress] = useState({})

    useEffect(() => {
        (async () => {
            await axios.get('data.json')
                .then(res => {
                    setCountryData(res.data)
                })
        }
        )()
    }, [])

    const serchOfCountry = countryData?.find((countItem) => countItem.country === country);
    const serchDivision = serchOfCountry?.division?.find((divItem) => divItem.name === division);
    const searchDistrict = serchDivision?.district?.find((disItem) => disItem.name === district);
    const searchSubDistrict = searchDistrict?.subDistrict?.find((subItem) => subItem.name === city);
    const searchTown = searchSubDistrict?.town?.find((townItem) => townItem.name === town);

    const zip = searchTown?.zip
    const handleShippingAddress = () => {
        const allData = { name, country, division, district, city, town, zip, village, house, phone, fax };
        setShippingAddress(allData)
    }

    // console.log(zip)

    return (
        <div className='bg-[#F9F9F9] py-10 px-5 lg:px-20'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div>
                    <h2 className='text-[#000] text-2xl font-semibold'>Billing Address</h2>
                    <form>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Attention</label>
                            <input
                                onBlur={e => { setName(e.target.value) }}
                                className='bg-[#fff] border-2 focus:outline-none pl-2 w-full py-1' type="text" name="customername" id="name" />
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Country</label>
                            <select
                                onChange={e => { setCountry((e.target.value).toLowerCase()) }}
                                className='w-full border-2 focus:outline-none py-1' name="country" id="">
                                <option value="Please search">Please search</option>
                                {
                                    countryData.length &&
                                    countryData.map((country, index) =>
                                        <option className='capitalize' key={index} value={country.country}>{country.country}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Division/State</label>
                            <select
                                onChange={e => { setDivision((e.target.value).toLowerCase()) }}
                                className='w-full border-2 focus:outline-none py-1' name="state" id="">
                                <option value="Please search">Please search</option>
                                {
                                    serchOfCountry?.division?.map((division, index) =>
                                        <option className='capitalize' key={index} value={division.name}>{division.name}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">District</label>
                            <select
                                onChange={e => { setDistrict((e.target.value).toLowerCase()) }}
                                className='w-full border-2 focus:outline-none py-1' name="district" id="">
                                <option value="Please search">Please search</option>
                                {
                                    serchDivision?.district?.map((district, index) =>
                                        <option key={index} className='capitalize' value={district.name}>{district.name}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">City/Sub-district/Thana</label>
                            <select
                                onChange={e => { setCity((e.target.value).toLowerCase()) }}
                                className='w-full border-2 focus:outline-none py-1' name="city" id="">
                                <option value="Please search">Please search</option>
                                {
                                    searchDistrict?.subDistrict?.map((subdist, index) =>
                                        <option key={index} className='capitalize' value={subdist.name}>{subdist.name}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Union/Area/Town</label>
                            <select
                                onChange={e => { setTown((e.target.value).toLowerCase()) }}
                                className='w-full border-2 focus:outline-none py-1' name="town" id="">
                                <option value="Please search">Please search</option>
                                {
                                    searchSubDistrict?.town?.map((town, index) =>
                                        <option key={index} className='capitalize' value={town.name}>{town.name}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Zip Code</label>
                            <select
                                className='w-full border-2 focus:outline-none py-1' name="zip" id="">
                                <option value="Please search" selected>Please search</option>
                                <option value={searchTown?.zip}>{searchTown?.zip}</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Street Address/Village</label>
                            <select
                                onChange={e => { setVillage((e.target.value).toLowerCase()) }}
                                className='w-full border-2 focus:outline-none py-1' name="street" id="">
                                <option value="Please search">Please search</option>
                                {
                                    searchTown?.village?.map((village, index) =>
                                        <option key={index} className='capitalize' value={village.name}>{village.name}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">House Suite/Apartment</label>
                            <input
                                onBlur={e => { setHouse(e.target.value) }}
                                className='bg-[#fff] border-2 focus:outline-none pl-2 w-full py-1' type="text" name="house" id="house" placeholder='house number:' />
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Phone</label>
                            <input
                                onBlur={e => { setPhone(e.target.value) }}
                                className='bg-[#fff] border-2 focus:outline-none pl-2 w-full py-1' type="text" name="phone" id="phone" placeholder='Phone number' />
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Fax</label>
                            <input
                                onChange={e => { setFax(e.target.value) }}
                                className='bg-[#fff] border-2 focus:outline-none pl-2 w-full py-1' type="text" name="fax" id="fax" placeholder='Fax' />
                        </div>
                    </form>
                </div>

                {/* shipping address starts */}

                <div>
                    <h2 className='text-[#000] text-2xl font-semibold inline-block'>Shipping Address</h2>
                    <p className='cursor-pointer text-[#1A73E8] underline inline-block ml-1' onClick={handleShippingAddress}> &darr;Copy billing address</p>
                    <form>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Attention</label>
                            <input className='bg-[#fff] border-2 focus:outline-none pl-2 w-full py-1' type="text" name="customername" id="name" value={shippingAddress?.name} />
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Country</label>
                            <select
                                className='w-full border-2 focus:outline-none py-1' name="country" id="">
                                <option value={shippingAddress?.country} selected>{shippingAddress?.country}</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Division/State</label>
                            <select
                                className='w-full border-2 focus:outline-none py-1' name="state" id="">
                                <option value={shippingAddress?.division} selected>{shippingAddress?.division}</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">District</label>
                            <select
                                className='w-full border-2 focus:outline-none py-1' name="district" id="">
                                <option value={shippingAddress?.district} selected>{shippingAddress?.district}</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">City/Sub-district/Thana</label>
                            <select
                                className='w-full border-2 focus:outline-none py-1' name="city" id="">
                                <option value={shippingAddress?.city} selected>{shippingAddress?.city}</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Union/Area/Town</label>
                            <select
                                className='w-full border-2 focus:outline-none py-1' name="town" id="">
                                <option value={shippingAddress?.town} selected>{shippingAddress?.town}</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Zip Code</label>
                            <input
                                value={shippingAddress?.zip}
                                className='bg-[#fff] border-2 focus:outline-none pl-2 w-full py-1' type="text" name="zip" id="zip" />
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Street Address/Village</label>
                            <select
                                className='w-full border-2 focus:outline-none py-1' name="street" id="">
                                <option value={shippingAddress?.village} selected>{shippingAddress?.village}</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">House Suite/Apartment</label>
                            <input
                                value={shippingAddress?.house}
                                className='bg-[#fff] border-2 focus:outline-none pl-2 w-full py-1' type="text" name="house" id="house" />
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Phone</label>
                            <input
                                value={shippingAddress?.phone}
                                className='bg-[#fff] border-2 focus:outline-none pl-2 w-full py-1' type="text" name="phone" id="phone" />
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Fax</label>
                            <input
                                value={shippingAddress?.fax}
                                className='bg-[#fff] border-2 focus:outline-none pl-2 w-full py-1' type="text" name="fax" id="fax" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bderp;