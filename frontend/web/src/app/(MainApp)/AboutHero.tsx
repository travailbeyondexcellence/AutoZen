const AboutHero = () => {
    const stats = [
        { value: '500M+', label: 'Posts Scheduled' },
        { value: '50+', label: 'Hours Saved/Month' },
        { value: '10K+', label: 'Businesses Automated' },
        { value: '99.9%', label: 'Uptime Guarantee' },
    ];

    return (
        <section className='py-20'>
            <div className='mx-auto max-w-6xl px-4 text-center'>
                <h1 className='mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white'>
                    Empowering businesses to grow through{' '}
                    <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                        intelligent social media automation
                    </span>
                </h1>
                <p className='mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl dark:text-gray-300'>
                    AUTOZEN helps businesses of all sizes maintain a consistent, engaging social media presence 
                    without the constant time investment. We believe in making professional social media 
                    management accessible to everyone.
                </p>
                
                <div className='mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4'>
                    {stats.map((stat, index) => (
                        <div key={index} className='text-center'>
                            <div className='text-4xl font-bold text-blue-600 dark:text-blue-400'>
                                {stat.value}
                            </div>
                            <div className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutHero;