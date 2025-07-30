const CompanyInfo = () => {
    const info = [
        {
            icon: (
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
            ),
            label: 'Support Hours',
            value: 'Monday - Friday, 9am - 6pm EST',
        },
        {
            icon: (
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
            ),
            label: 'Response Times',
            value: 'Sales: < 24 hours • Support: < 2 hours',
        },
        {
            icon: (
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
                </svg>
            ),
            label: 'Available Worldwide',
            value: 'Supporting businesses globally',
        },
    ];

    const socialLinks = [
        {
            name: 'Twitter/X Support',
            href: 'https://twitter.com/autozen_support',
            icon: (
                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/company/autozen',
            icon: (
                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
            ),
        },
    ];

    return (
        <section className='py-20'>
            <div className='mx-auto max-w-6xl px-4'>
                <div className='rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 dark:from-gray-800 dark:to-gray-900'>
                    <h2 className='mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white'>
                        We're here to help
                    </h2>
                    
                    <div className='grid gap-6 md:grid-cols-3'>
                        {info.map((item, index) => (
                            <div key={index} className='text-center'>
                                <div className='mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-md dark:bg-gray-700 dark:text-blue-400'>
                                    {item.icon}
                                </div>
                                <h3 className='mb-1 font-semibold text-gray-900 dark:text-white'>
                                    {item.label}
                                </h3>
                                <p className='text-sm text-gray-600 dark:text-gray-400'>
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='mt-8 border-t border-gray-200 pt-8 dark:border-gray-700'>
                        <p className='mb-4 text-center text-sm font-medium text-gray-500 dark:text-gray-400'>
                            CONNECT WITH US
                        </p>
                        <div className='flex items-center justify-center gap-4'>
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-700 dark:text-gray-300'>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo;