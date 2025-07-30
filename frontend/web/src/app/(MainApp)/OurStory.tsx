const OurStory = () => {
    return (
        <section className='py-20 bg-gray-50 dark:bg-gray-900'>
            <div className='mx-auto max-w-6xl px-4'>
                <div className='grid gap-12 lg:grid-cols-2 lg:gap-16 items-center'>
                    <div>
                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white'>
                            Our Story
                        </h2>
                        <div className='mt-6 space-y-4 text-gray-600 dark:text-gray-300'>
                            <p>
                                <span className='font-semibold text-gray-900 dark:text-white'>Why we built AUTOZEN:</span> We 
                                noticed that businesses were spending countless hours managing their social media presence, 
                                often at the expense of actually running their business. The constant pressure to post 
                                regularly, engage with audiences, and maintain consistency was overwhelming.
                            </p>
                            <p>
                                <span className='font-semibold text-gray-900 dark:text-white'>Our solution:</span> AUTOZEN 
                                combines cutting-edge AI technology with intelligent scheduling to create a platform that 
                                understands your brand voice, generates authentic content, and posts at optimal times - all 
                                automatically. We're not just another scheduling tool; we're your AI-powered social media team.
                            </p>
                            <p>
                                <span className='font-semibold text-gray-900 dark:text-white'>Our vision:</span> We envision 
                                a future where every business, regardless of size or budget, can maintain a professional and 
                                engaging social media presence. Where AI enhances human creativity rather than replacing it, 
                                and where social media becomes a growth engine, not a time sink.
                            </p>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8'>
                            <div className='flex h-full items-center justify-center'>
                                <div className='text-center text-white'>
                                    <svg
                                        className='mx-auto h-24 w-24 mb-4'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={1.5}
                                            d='M13 10V3L4 14h7v7l9-11h-7z'
                                        />
                                    </svg>
                                    <p className='text-2xl font-bold'>Automation meets authenticity</p>
                                    <p className='mt-2'>Powered by AI, driven by your brand</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;