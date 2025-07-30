import Link from 'next/link';

const Hero = () => {
    return (
        <section className='flex min-h-[calc(100vh-100px)] items-center justify-center px-4'>
            <div className='mx-auto max-w-6xl text-center'>
                <h1 className='mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-white'>
                    Automate Your Workflow with{' '}
                    <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                        AUTOZEN
                    </span>
                </h1>
                <p className='mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-300'>
                    Streamline your business processes, boost productivity, and save time with our powerful automation platform.
                    Built for teams who want to focus on what matters most.
                </p>
                <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                    <Link
                        href='/pricing'
                        className='rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-700'>
                        Get Started Free
                    </Link>
                    <Link
                        href='/about'
                        className='rounded-lg border border-gray-300 bg-white px-8 py-3 text-lg font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'>
                        Learn More
                    </Link>
                </div>
                <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                    No credit card required • Free 14-day trial
                </p>
            </div>
        </section>
    );
};

export default Hero;