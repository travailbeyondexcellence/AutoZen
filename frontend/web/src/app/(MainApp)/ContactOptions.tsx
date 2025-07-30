import Link from 'next/link';

const ContactOptions = () => {
    const options = [
        {
            title: 'Sales Inquiries',
            description: 'Interested in AUTOZEN for your team?',
            details: 'Talk to our sales team about enterprise plans and custom solutions',
            icon: (
                <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
            ),
            action: 'Schedule a Demo',
            href: '/contact#demo',
            color: 'blue',
        },
        {
            title: 'Support',
            description: 'Need help with your account?',
            details: 'Our support team typically responds within 2 hours',
            icon: (
                <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' />
                </svg>
            ),
            action: 'Email Support',
            href: 'mailto:support@autozen.io',
            color: 'purple',
        },
        {
            title: 'Partnerships',
            description: 'Want to partner with AUTOZEN?',
            details: "Let's explore integration and partnership opportunities",
            icon: (
                <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' />
                </svg>
            ),
            action: 'Partner with Us',
            href: '/contact#partner',
            color: 'green',
        },
    ];

    const colorClasses = {
        blue: 'from-blue-500 to-blue-600',
        purple: 'from-purple-500 to-purple-600',
        green: 'from-green-500 to-green-600',
    };

    return (
        <section className='py-20 bg-gray-50 dark:bg-gray-900'>
            <div className='mx-auto max-w-6xl px-4'>
                <div className='grid gap-8 md:grid-cols-3'>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className='group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800'>
                            <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${colorClasses[option.color as keyof typeof colorClasses]} text-white shadow-lg`}>
                                {option.icon}
                            </div>
                            <h3 className='mb-2 text-2xl font-bold text-gray-900 dark:text-white'>
                                {option.title}
                            </h3>
                            <p className='mb-2 font-medium text-gray-700 dark:text-gray-200'>
                                {option.description}
                            </p>
                            <p className='mb-6 text-gray-600 dark:text-gray-400'>
                                {option.details}
                            </p>
                            <Link
                                href={option.href}
                                className='inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'>
                                {option.action}
                                <svg
                                    className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                                    />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactOptions;