
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Job_details() {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [company, setCompany] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.5:3000/api/jobs/job/${id}`)
      .then(res => res.json())
      .then(data => {
        setJob(data);
        fetch(`http://127.0.0.5:3000/api/companies/${data.companyId}`) // Assuming an endpoint to fetch company details
          .then(res => res.json())
          .then(companyData => setCompany(companyData))
          .catch(error => console.error('Error fetching company details:', error));
      })
      .catch(error => console.error('Error fetching job details:', error));
  }, [id]);

  // Function to format date from ISO string to readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to format salary range
  const formatSalaryRange = (min, max) => {
    if (min && max) {
      return `₹ ${min} - ₹ ${max} / month`;
    } else if (min) {
      return `₹ ${min} / month`;
    } else {
      return 'Salary not specified';
    }
  };

  return (
    <div className="bg-white rounded-lg mt-20 shadow-md p-6">
      {/* Job Title, Company Logo, and Apply Button */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          {job.companyLogo && (
            <img src={job.companyLogo} alt="Company Logo" className="h-12 w-12 object-contain mr-4" />
          )}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{job.jobTitle}</h2>
            <p className="text-gray-600">{job.companyName}</p>
          </div>
        </div>
        <div>
          <Link to='/details/apply'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Apply Now
            </button>
          </Link>
        </div>
      </div>

      <hr className="my-4" />

      {/* Experience Level and Employment Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V11a2 2 0 00-2-2H5zM11 5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2z" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">{job.experienceLevel}</p>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" clipRule="evenodd" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">{job.employmentType}</p>
        </div>
      </div>

      <hr className="my-4" />

      {/* Job Description and Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Job Description</h3>
        <p className="text-gray-700">{job.description}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Skills Required</h3>
        <ul className="list-disc list-inside text-gray-700">
          {job.skills && job.skills.map((skill, index) => (
            <li key={index}>{skill.label}</li>
          ))}
        </ul>
      </div>

      <hr className="my-4" />

      {/* Salary Range and Posting Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" clipRule="evenodd" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">{formatSalaryRange(job.minPrice, job.maxPrice)}</p>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">Posted: {formatDate(job.postingDate)}</p>
        </div>
      </div>

      <hr className="my-4" />

      {/* Location and Duration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">Location: {job.jobLocation}</p>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">Duration: {job.duration}</p>
        </div>
      </div>

      <hr className="my-4" />

      {/* Posted Date and Expires Date */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">Posted by: {job.postedBy}</p>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">Expires: {formatDate(job.expiresDate)}</p>
        </div>
      </div>

      <hr className="my-4" />

      {/* Number of Applicants */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Number of Applicants</h3>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">{job.applicantsCount}+ applicants</p>
        </div>
      </div>
    </div>
  );
}

export default Job_details;
