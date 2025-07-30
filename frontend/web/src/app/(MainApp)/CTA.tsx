import Link from 'next/link';

const CTA = () => {
    return (
        <section className='py-20'>
            <div className='mx-auto max-w-7xl px-4'>
                <div className='rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-16 text-center shadow-xl sm:px-12'>
                    <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                        Ready to transform your workflow?
                    </h2>
                    <p className='mx-auto mt-4 max-w-2xl text-lg text-blue-100'>
                        Join thousands of teams who are already saving hours every week with AUTOZEN
                    </p>
                    <div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row'>
                        <Link
                            href='/pricing'
                            className='rounded-lg bg-white px-8 py-3 text-lg font-medium text-blue-600 transition-all hover:bg-gray-50 hover:shadow-md'>
                            Start Free Trial
                        </Link>
                        <Link
                            href='/contact'
                            className='rounded-lg border-2 border-white px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-white hover:text-blue-600'>
                            Talk to Sales
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;