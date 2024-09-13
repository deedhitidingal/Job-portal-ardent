import React, { useState } from 'react';
import ReviewContent from './ReviewContent';
import SideBarJobPost from '../SideProgressBar.jsx/SideBarJobPost';

const MainLayout9 = () => {
    const [currentStep, setCurrentStep] = useState(5); // Starting from step 5 for Review
    const [currentSubStep, setCurrentSubStep] = useState(null);

    const handleNextStep = () => {
        if (currentStep < 5) {
            setCurrentStep(currentStep + 1);
            setCurrentSubStep(null);
        }
    };

    const handlePreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            setCurrentSubStep(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-8 mt-28 mb-10">
                <div className="flex">
                    <SideBarJobPost 
                        currentStep={currentStep} 
                        setCurrentStep={setCurrentStep} 
                        currentSubStep={currentSubStep} 
                        setCurrentSubStep={setCurrentSubStep} 
                    />
                    <div className="flex flex-col flex-grow p-10 overflow-y-auto">
                        <ReviewContent 
                            stages={[]} // Pass actual stages if needed
                            onNext={handleNextStep}
                            onBack={handlePreviousStep}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout9;
