import React from 'react';

function User_dash() {
  return (
    <div className="flex h-screen  bg-black">
      <div className="w-1/4 bg-black p-6 mb-48 text-white">
        <div className="mb-4">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2 mb-48" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H9a9 9 0 019-9m4-12V3m-4 0V12m4 0h-8M2 12h8m0 0l4 4m-4-4l4-4" /></svg>
            <span>Dashboard</span>
          </div>
        </div>
        <div className="mb-20">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Applied Jobs</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c0 1.105-1.105 2-2 2s-2-.895-2-2c0-1.105 1.105-2 2-2s2 .895 2 2z" /></svg>
            <span>Personal Info</span>
          </div>
        </div>
        
      </div>
      <div className="w-3/4 bg-blue-900 p-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <input type="text" className="bg-blue-800 text-white border border-blue-700 rounded-md px-3 py-2" placeholder="Search..." />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-800 rounded-md mt-20 p-20">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h2 className="text-xl font-bold text-center">Member since</h2>
          </div>
          <div className="bg-blue-800 rounded-md mt-20 p-20">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h12a4 4 0 004-4V3a4 4 0 00-4-4H7a4 4 0 00-4 4v12z" /></svg>
            </div>
            <h2 className="text-xl font-bold text-center">Number of jobs submitted</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User_dash;
