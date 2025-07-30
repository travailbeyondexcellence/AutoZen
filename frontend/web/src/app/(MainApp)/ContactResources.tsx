import Link from 'next/link';

const ContactResources = () => {
    const resources = [
        {
            title: 'Documentation',
            description: 'Comprehensive guides and tutorials',
            icon: (
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                </svg>
            ),
            href: '/docs',
        },
        {
            title: 'API Reference',
            description: 'Build custom integrations',
            icon: (
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
                </svg>
            ),
            href: '/api',
        },
        {
            title: 'Status Page',
            description: 'Check system status and uptime',
            icon: (
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
            ),
            href: 'https://status.autozen.io',
        },
        {
            title: 'Community Forum',
            description: 'Connect with other users',
            icon: (
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
            ),
            href: '/community',
        },
        {
            title: 'Video Tutorials',
            description: 'Learn AUTOZEN step by step',
            icon: (
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
            ),
            href: '/tutorials',
        },
        {
            title: 'Help Center',
            description: 'Find answers quickly',
            icon: (
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
            ),
            href: '/help',
        },
    ];

    return (
        <section className='py-20 bg-gray-50 dark:bg-gray-900'>
            <div className='mx-auto max-w-6xl px-4'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white'>
                        Helpful Resources
                    </h2>
                    <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
                        Everything you need to succeed with AUTOZEN
                    </p>
                </div>

                <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {resources.map((resource, index) => (
                        <Link
                            key={index}
                            href={resource.href}
                            className='group rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800'>
                            <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900 dark:text-blue-400'>
                                {resource.icon}
                            </div>
                            <h3 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
                                {resource.title}
                            </h3>
                            <p className='text-gray-600 dark:text-gray-400'>
                                {resource.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactResources;