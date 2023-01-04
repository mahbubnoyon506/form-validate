import React from 'react';

const Bderp = () => {
    return (
        <div className='bg-[#F9F9F9] py-10 px-5'>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <h2 className='text-[#000] text-2xl font-semibold'>Billing Address</h2>
                    <form>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Attention</label>
                            <input className='bg-[#fff] border-2 focus:outline-none pl-2 w-full' type="text" name="" id="" />
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Country</label>
                            <select className='w-full border-2 focus:outline-none' name="" id="">
                                <option value="Please search">Please search</option>
                                <option value="Bangladesh">Bangladesh</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Division/State</label>
                            <select className='w-full border-2 focus:outline-none' name="" id="">
                                <option value="Please search">Please search</option>
                                <option value="Bangladesh">Bangladesh</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">District</label>
                            <select className='w-full border-2 focus:outline-none' name="" id="">
                                <option value="Please search">Please search</option>
                                <option value="Bangladesh">Bangladesh</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">City/Sub-district/Thana</label>
                            <select className='w-full border-2 focus:outline-none' name="" id="">
                                <option value="Please search">Please search</option>
                                <option value="Bangladesh">Bangladesh</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Union/Area/Town</label>
                            <select className='w-full border-2 focus:outline-none' name="" id="">
                                <option value="Please search">Please search</option>
                                <option value="Bangladesh">Bangladesh</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Zip Code</label>
                            <select className='w-full border-2 focus:outline-none' name="" id="">
                                <option value="Please search">Please search</option>
                                <option value="Bangladesh">Bangladesh</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Street Address/Village</label>
                            <select className='w-full border-2 focus:outline-none' name="" id="">
                                <option value="Please search">Please search</option>
                                <option value="Bangladesh">Bangladesh</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">House Suite/Apartment</label>
                            <input className='bg-[#fff] border-2 focus:outline-none pl-2 w-full' type="text" name="" id="" placeholder='house number:'/>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Phone</label>
                            <input className='bg-[#fff] border-2 focus:outline-none pl-2 w-full' type="text" name="" id="" placeholder='Phone number'/>
                        </div>
                        <div className='pb-2'>
                            <label className='block text-[#000]' htmlFor="">Fax</label>
                            <input className='bg-[#fff] border-2 focus:outline-none pl-2 w-full' type="text" name="" id="" placeholder='Fax'/>
                        </div>
                    </form>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Bderp;