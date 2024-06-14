import React from 'react';
import { Link } from 'react-router-dom';
function Job_details() {
  return (
    <div className="bg-white rounded-lg mt-20 h-screen shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Machine Learning</h2>
      <p className="text-gray-500 mb-4">AskMeOffers</p>
      <div className="flex mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V11a2 2 0 00-2-2H5zM11 5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2z" />
        </svg>
        <p className="ml-2">Work from home</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" clipRule="evenodd" />
          </svg>
          <p className="ml-2">Immediately</p>
        </div>
        <div className="flex items-center">
        
          <p className="ml-2">2 Months</p>
        </div>
        <div className="flex items-center">
         
          <p className="ml-2">₹ 30,000 /month</p>
        </div>
        <div className="flex items-center">
          
          <p className="ml-2">14 Jun' 24</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          
          <p className="ml-2">Posted 3 weeks ago</p>
        </div>
        <Link to='apply'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply here</button>
        </Link>
      </div>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" clipRule="evenodd" />
        </svg>
        <p className="ml-2">1000+ applicants</p>
      </div>
    </div>
  );
}

export default Job_details;