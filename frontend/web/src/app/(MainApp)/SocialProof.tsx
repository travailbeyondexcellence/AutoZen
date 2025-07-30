const SocialProof = () => {
    const testimonials = [
        {
            quote: "AUTOZEN transformed how we handle social media. What used to take hours now happens automatically, and our engagement has never been better.",
            author: 'Sarah Chen',
            role: 'Marketing Director',
            company: 'TechStart Inc.',
        },
        {
            quote: "The AI content generation is incredible. It captures our brand voice perfectly and saves us 20+ hours every week.",
            author: 'Michael Rodriguez',
            role: 'Founder',
            company: 'GrowthLabs',
        },
        {
            quote: "Finally, a tool that actually understands social media strategy. The analytics help us make data-driven decisions that drive real growth.",
            author: 'Emma Thompson',
            role: 'Social Media Manager',
            company: 'Bloom & Co.',
        },
    ];

    const logos = [
        'TechCorp', 'StartupHub', 'GrowthCo', 'InnovateLabs', 'DigitalFirst', 'NextGen'
    ];

    return (
        <section className='py-20 bg-gray-50 dark:bg-gray-900'>
            <div className='mx-auto max-w-6xl px-4'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white'>
                        Trusted by thousands of{' '}
                        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                            growing businesses
                        </span>
                    </h2>
                    <p className='mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
                        See what our customers have to say about AUTOZEN
                    </p>
                </div>

                <div className='mt-16 grid gap-8 lg:grid-cols-3'>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className='rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800'>
                            <div className='mb-4 flex'>
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className='h-5 w-5 text-yellow-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'>
                                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                    </svg>
                                ))}
                            </div>
                            <p className='mb-6 text-gray-600 dark:text-gray-300'>
                                "{testimonial.quote}"
                            </p>
                            <div>
                                <p className='font-semibold text-gray-900 dark:text-white'>
                                    {testimonial.author}
                                </p>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>
                                    {testimonial.role} at {testimonial.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-16'>
                    <p className='text-center text-sm font-medium text-gray-500 dark:text-gray-400'>
                        TRUSTED BY LEADING BRANDS
                    </p>
                    <div className='mt-8 flex flex-wrap items-center justify-center gap-8'>
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className='text-2xl font-bold text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400'>
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white'>
                    <h3 className='text-3xl font-bold'>
                        Ready to transform your social media strategy?
                    </h3>
                    <p className='mx-auto mt-4 max-w-2xl text-lg text-blue-100'>
                        Join thousands of businesses already growing with AUTOZEN
                    </p>
                    <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                        <a
                            href='/pricing'
                            className='rounded-full bg-white px-8 py-3 font-medium text-blue-600 transition-all hover:bg-gray-100 hover:shadow-lg'>
                            Start Free Trial
                        </a>
                        <a
                            href='/contact'
                            className='rounded-full border-2 border-white px-8 py-3 font-medium text-white transition-all hover:bg-white hover:text-blue-600'>
                            See How It Works
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;