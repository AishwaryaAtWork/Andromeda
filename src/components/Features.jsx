import React, { useState } from 'react';

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                    className="flex justify-between items-center w-full p-4 bg-gray-900 text-white font-medium"
                    onClick={handleToggle}
                >
                    <span className="text-lg">Features of our App</span>
                    <svg
                        className={`h-6 w-6 ${isOpen ? 'transform rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="p-4 bg-gray-100 text-gray-900">
                        <ul className="list-disc pl-5">
                            <li>Get latest information about upcoming internships</li>
                            <li>Explore apprenticeships and fellowships</li>
                            <li>Find scholarships for your education</li>
                            <li>Get access to GitHub student developer pack</li>
                            <li>And much more!</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
