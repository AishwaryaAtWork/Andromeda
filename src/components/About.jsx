import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="rounded-lg shadow-md overflow-hidden">
                <button
                    className="flex justify-between items-center w-full p-4 bg-gray-900 text-white font-medium"
                    onClick={handleToggle}
                >
                    <span className="text-lg">Features of our React App</span>
                    {isOpen ? (
                        <ChevronUpIcon className="h-6 w-6 text-white" />
                    ) : (
                        <ChevronDownIcon className="h-6 w-6 text-white" />
                    )}
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
