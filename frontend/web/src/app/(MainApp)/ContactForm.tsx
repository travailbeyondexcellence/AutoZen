'use client';

import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        topic: 'sales',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section className='py-20' id='contact-form'>
            <div className='mx-auto max-w-3xl px-4'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white'>
                        Send us a message
                    </h2>
                    <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
                        We'll get back to you within 24 hours
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='mt-12 space-y-6'>
                    <div className='grid gap-6 sm:grid-cols-2'>
                        <div>
                            <label
                                htmlFor='name'
                                className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                                Name <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className='mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                                placeholder='John Doe'
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='email'
                                className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                                Email <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className='mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                                placeholder='john@company.com'
                            />
                        </div>
                    </div>

                    <div className='grid gap-6 sm:grid-cols-2'>
                        <div>
                            <label
                                htmlFor='company'
                                className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                                Company
                            </label>
                            <input
                                type='text'
                                id='company'
                                name='company'
                                value={formData.company}
                                onChange={handleChange}
                                className='mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                                placeholder='Company Inc.'
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='topic'
                                className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                                Topic <span className='text-red-500'>*</span>
                            </label>
                            <select
                                id='topic'
                                name='topic'
                                required
                                value={formData.topic}
                                onChange={handleChange}
                                className='mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white'>
                                <option value='sales'>Sales</option>
                                <option value='support'>Support</option>
                                <option value='partnership'>Partnership</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor='message'
                            className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                            Message <span className='text-red-500'>*</span>
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            required
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            className='mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                            placeholder='Tell us how we can help you...'
                        />
                    </div>

                    <div className='text-center'>
                        <button
                            type='submit'
                            className='inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-lg font-medium text-white transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-lg'>
                            Send Message
                            <svg
                                className='ml-2 h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;