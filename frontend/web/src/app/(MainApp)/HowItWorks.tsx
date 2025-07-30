const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Connect',
            description: 'Link your social media accounts in seconds. We support all major platforms.',
            icon: (
                <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' />
                </svg>
            ),
        },
        {
            number: '02',
            title: 'Create',
            description: 'Let AI generate on-brand content or upload your own. Review and customize as needed.',
            icon: (
                <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
                </svg>
            ),
        },
        {
            number: '03',
            title: 'Schedule',
            description: 'Our smart automation finds the best times to post for maximum engagement.',
            icon: (
                <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                </svg>
            ),
        },
        {
            number: '04',
            title: 'Analyze',
            description: 'Track performance, understand your audience, and optimize your strategy.',
            icon: (
                <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                </svg>
            ),
        },
    ];

    return (
        <section className='py-20 bg-gray-50 dark:bg-gray-900'>
            <div className='mx-auto max-w-6xl px-4'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white'>
                        How AUTOZEN Works
                    </h2>
                    <p className='mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
                        Get started in minutes, see results in days
                    </p>
                </div>

                <div className='mt-16'>
                    <div className='relative'>
                        {/* Connection line */}
                        <div className='absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-600 to-purple-600 lg:block' />
                        
                        <div className='space-y-12 lg:space-y-16'>
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col lg:flex-row ${
                                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    } items-center gap-8 lg:gap-16`}>
                                    <div className='flex-1 text-center lg:text-left'>
                                        <div className='inline-flex items-center gap-4 mb-4'>
                                            <span className='text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                                                {step.number}
                                            </span>
                                            <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className='text-lg text-gray-600 dark:text-gray-300'>
                                            {step.description}
                                        </p>
                                    </div>
                                    
                                    <div className='relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl lg:h-24 lg:w-24'>
                                        {step.icon}
                                    </div>
                                    
                                    <div className='flex-1' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;