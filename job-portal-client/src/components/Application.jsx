import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Application = () => {

    const { register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm();
    const [selectedFile, setSelectedFile] = useState(null);

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <div className="bg-gray-200 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Job Application</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            {...register('firstName', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-xs mt-1">First Name is required</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            {...register('lastName', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-xs mt-1">Last Name is required</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email.type === 'required' && 'Email is required'}
                                {errors.email.type === 'pattern' && 'Please enter a valid email'}
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="jobRole" className="block text-gray-700 text-sm font-bold mb-2">
                            Job Role
                        </label>
                        <select
                            id="jobRole"
                            {...register('jobRole', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Data Scientist">Data Scientist</option>
                            <option value="Project Manager">Project Manager</option>
                        </select>
                        {errors.jobRole && (
                            <p className="text-red-500 text-xs mt-1">Job Role is required</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                            Address
                        </label>
                        <textarea
                            id="address"
                            {...register('address', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                        />
                        {errors.address && (
                            <p className="text-red-500 text-xs mt-1">Address is required</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
                            City Name
                        </label>
                        <input
                            type="text"
                            id="city"
                            {...register('city', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.city && (
                            <p className="text-red-500 text-xs mt-1">City is required</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="pincode" className="block text-gray-700 text-sm font-bold mb-2">
                            PinCode
                        </label>
                        <input
                            type="text"
                            id="pincode"
                            {...register('pincode', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.pincode && (
                            <p className="text-red-500 text-xs mt-1">PinCode is required</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                            Date of birth
                        </label>
                        <input
                            type="date"
                            id="date"
                            {...register('date', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.date && (
                            <p className="text-red-500 text-xs mt-1">Date is required</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="cv" className="block text-gray-700 text-sm font-bold mb-2">
                            Upload Your CV
                        </label>
                        <input
                            type="file"
                            id="cv"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {selectedFile && <p className="text-gray-600 text-sm mt-1">{selectedFile.name}</p>}
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Apply Now
                </button>
            </form>
        </div>
    );
}

export default Application







