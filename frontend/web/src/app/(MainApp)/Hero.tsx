import Link from 'next/link';

const Hero = () => {
    return (
        <section className='flex min-h-[calc(100vh-100px)] items-center justify-center px-4'>
            <div className='mx-auto max-w-6xl text-center'>
                <div className='mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300'>
                    <span className='mr-2'>🚀</span> Trusted by 10,000+ businesses worldwide
                </div>
                <h1 className='mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-white'>
                    Grow your business at the{' '}
                    <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                        speed of automation
                    </span>
                </h1>
                <p className='mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:text-xl dark:text-gray-300'>
                    AUTOZEN is the all-you-need automation toolkit that helps small businesses save time, 
                    stay organized, and build meaningful connections with their work — all in one place.
                </p>
                <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                    <Link
                        href='/pricing'
                        className='rounded-full bg-blue-600 px-8 py-3.5 text-lg font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg'>
                        Start your free 14-day trial
                    </Link>
                    <Link
                        href='/about'
                        className='rounded-full border border-gray-300 bg-white px-8 py-3.5 text-lg font-medium text-gray-700 transition-all hover:border-gray-400 hover:shadow-md dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'>
                        Watch demo
                    </Link>
                </div>
                <div className='mt-8 flex items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400'>
                    <div className='flex items-center gap-2'>
                        <svg className='h-5 w-5 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                        No credit card required
                    </div>
                    <div className='flex items-center gap-2'>
                        <svg className='h-5 w-5 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                        Free plan available
                    </div>
                    <div className='flex items-center gap-2'>
                        <svg className='h-5 w-5 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                        Cancel anytime
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;