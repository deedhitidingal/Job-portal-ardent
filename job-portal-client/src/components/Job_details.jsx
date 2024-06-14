import React from 'react';

function Job_details() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold text-gray-800">
          Machine Learning Work From Home Internship
        </div>
        <div className="w-16 h-16 rounded-full bg-pink-500 flex justify-center items-center">
          <p className="text-white text-lg font-bold">
            <span className="text-sm">Ask</span>MeOffers
          </p>
        </div>
      </div>
      <div className="flex justify-between mb-6">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-800">
            Machine Learning
          </h2>
          <p className="text-gray-600">AskMeOffers</p>
          <p className="text-gray-600">
            <i className="fa-solid fa-home"></i> Work from home
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center mb-2">
            <i className="fa-solid fa-calendar-days"></i>
            <span className="ml-2">
              <span className="font-bold">Start Date:</span> Immediately
            </span>
          </div>
          <div className="flex items-center mb-2">
            <i className="fa-solid fa-calendar-days"></i>
            <span className="ml-2">
              <span className="font-bold">Duration:</span> 2 Months
            </span>
          </div>
          <div className="flex items-center mb-2">
            <i className="fa-solid fa-money-bill-wave"></i>
            <span className="ml-2">
              <span className="font-bold">Stipend:</span> ₹ 30,000/month
            </span>
          </div>
          <div className="flex items-center mb-2">
            <i className="fa-solid fa-calendar-check"></i>
            <span className="ml-2">
              <span className="font-bold">Apply By:</span> 14 Jun' 24
            </span>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-clock"></i>
            <span className="ml-2">Posted 3 weeks ago</span>
          </div>
          <div className="flex items-center ml-2">
            <i className="fa-solid fa-briefcase"></i>
            <span className="ml-2">Internship</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <i className="fa-solid fa-user-group"></i>
          <span className="ml-2">1000+ applicants</span>
        </div>
        <div>
          <i className="fa-solid fa-share-from-square"></i>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          About the work from home job/internship
        </h2>
        <p className="text-gray-600">
          Selected intern's day-to-day responsibilities include:
        </p>
      </div>
      <ul className="list-disc ml-8 text-gray-600">
        <li>
          Data Preprocessing: Cleaning and preparing raw data for analysis, which may
          involve tasks such as handling missing values, scaling features,
          encoding categorical variables, and splitting datasets into training and
          testing sets.
        </li>
        <li>
          Exploratory Data Analysis (EDA): Analyzing and visualizing datasets to
          gain insights into underlying patterns, trends, and relationships. This
          may involve generating summary statistics, creating histograms, scatter
          plots, and heatmaps, and identifying outliers or anomalies.
        </li>
      </ul>
    </div>
  );
}

export default Job_details;