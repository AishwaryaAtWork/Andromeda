import React from 'react';

const Contact = () => {
    return (
        <div className="w-full max-w-2xl mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <form className="mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Enter your message"></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Send
                    </button>
                </div>
            </form>
            <p className="text-gray-600 text-sm">
                If you have any questions or feedback, please don't hesitate to reach out to us at <a href="mailto:contact@myreactapp.com" className="text-blue-500">contact@scholarsphere.com</a>.
            </p>
        </div>
    );
};

export default Contact;
