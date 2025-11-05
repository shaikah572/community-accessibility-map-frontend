import React from 'react'

const ContactPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12 w-screen'>
            <div className='max-w-md w-full bg-white shadow-md rounded-xl p-8'>
                <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>Contact Us</h1>

                <form className='space-y-5'>
                    <div>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
                            Your Name
                        </label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            className='w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm' />
                    </div>

                    <div>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                            Your Email
                        </label>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            className='w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm' />
                    </div>

                    <div>
                        <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
                            Message
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            rows='4'
                            className='w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm' ></textarea>
                    </div>

                    <button
                        type='submit'
                        className='w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage