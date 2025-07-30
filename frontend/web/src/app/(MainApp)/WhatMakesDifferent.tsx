const WhatMakesDifferent = () => {
    const differences = [
        {
            title: 'AI-Powered Content',
            description: 'Our AI doesn\'t just generate generic posts. It learns your brand voice, understands your industry, and creates content that sounds authentically you.',
            icon: (
                <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
            ),
        },
        {
            title: 'Smart Scheduling',
            description: 'Post when your audience is most active. Our algorithm analyzes engagement patterns to find the perfect posting times for maximum reach.',
            icon: (
                <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
            ),
        },
        {
            title: 'Multi-Platform Management',
            description: 'Manage all your social channels from one dashboard. Create once, customize for each platform, and maintain consistency everywhere.',
            icon: (
                <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' />
                </svg>
            ),
        },
        {
            title: 'Analytics That Matter',
            description: 'Focus on metrics that drive growth. Track engagement, reach, and conversions - not just likes. Get actionable insights to improve your strategy.',
            icon: (
                <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                </svg>
            ),
        },
    ];

    return (
        <section className='py-20'>
            <div className='mx-auto max-w-6xl px-4'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white'>
                        What Makes{' '}
                        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                            AUTOZEN
                        </span>{' '}
                        Different
                    </h2>
                    <p className='mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
                        We're not just another social media tool. We're your AI-powered growth partner.
                    </p>
                </div>

                <div className='mt-16 grid gap-8 sm:grid-cols-2'>
                    {differences.map((item, index) => (
                        <div
                            key={index}
                            className='rounded-xl border border-gray-200 bg-white p-8 transition-all hover:border-blue-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400'>
                            <div className='mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
                                {item.icon}
                            </div>
                            <h3 className='mb-3 text-xl font-semibold text-gray-900 dark:text-white'>
                                {item.title}
                            </h3>
                            <p className='text-gray-600 dark:text-gray-300'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatMakesDifferent;