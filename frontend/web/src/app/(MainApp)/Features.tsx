const features = [
    {
        title: 'Workflow Automation',
        description: 'Create powerful workflows that connect your favorite tools and automate repetitive tasks.',
        icon: (
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                />
            </svg>
        ),
    },
    {
        title: 'Smart Scheduling',
        description: 'Schedule your content and tasks intelligently with our AI-powered scheduling engine.',
        icon: (
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
            </svg>
        ),
    },
    {
        title: 'Team Collaboration',
        description: 'Work seamlessly with your team with real-time collaboration and approval workflows.',
        icon: (
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                />
            </svg>
        ),
    },
    {
        title: 'Analytics & Insights',
        description: 'Get detailed insights into your automation performance with comprehensive analytics.',
        icon: (
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                />
            </svg>
        ),
    },
    {
        title: 'API Integration',
        description: 'Connect with 1000+ apps and services through our robust API and integration platform.',
        icon: (
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                />
            </svg>
        ),
    },
    {
        title: 'Enterprise Security',
        description: 'Bank-level security with SOC 2 compliance, SSO, and advanced permission controls.',
        icon: (
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
            </svg>
        ),
    },
];

const Features = () => {
    return (
        <section className='py-20'>
            <div className='mx-auto max-w-7xl px-4'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
                        Everything you need to automate your business
                    </h2>
                    <p className='mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
                        AUTOZEN provides all the tools you need to streamline your workflows and boost productivity
                    </p>
                </div>
                <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800'>
                            <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'>
                                {feature.icon}
                            </div>
                            <h3 className='mb-2 text-xl font-semibold text-gray-900 dark:text-white'>{feature.title}</h3>
                            <p className='text-gray-600 dark:text-gray-300'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;