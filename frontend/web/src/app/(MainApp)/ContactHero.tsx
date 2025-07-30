const ContactHero = () => {
    return (
        <section className='py-20'>
            <div className='mx-auto max-w-6xl px-4 text-center'>
                <h1 className='mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white'>
                    Let's talk about growing your{' '}
                    <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                        social presence
                    </span>
                </h1>
                <p className='mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl dark:text-gray-300'>
                    Have questions? Need help? We're here for you every step of the way.
                </p>
                <div className='mt-8 flex flex-col items-center justify-center gap-4 text-sm text-gray-600 sm:flex-row sm:gap-8 dark:text-gray-400'>
                    <div className='flex items-center gap-2'>
                        <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                        </svg>
                        support@autozen.io
                    </div>
                    <div className='flex items-center gap-2'>
                        <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                        Average response time: 2 hours
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;