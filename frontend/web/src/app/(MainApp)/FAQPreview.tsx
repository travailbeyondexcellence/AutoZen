import Link from 'next/link';

const FAQPreview = () => {
    const faqs = [
        {
            question: 'How quickly can I get started with AUTOZEN?',
            answer: 'You can be up and running in less than 5 minutes. Simply connect your social accounts, and our AI will start learning your brand voice immediately.',
        },
        {
            question: 'Do you offer a free trial?',
            answer: 'Yes! We offer a 14-day free trial on all paid plans. No credit card required to start.',
        },
        {
            question: 'Can I cancel my subscription anytime?',
            answer: 'Absolutely. You can cancel or change your plan at any time from your account settings. No questions asked.',
        },
        {
            question: 'Which social media platforms do you support?',
            answer: 'We support all major platforms including Facebook, Instagram, Twitter/X, LinkedIn, TikTok, and more. New platforms are added regularly.',
        },
    ];

    return (
        <section className='py-20 bg-gray-50 dark:bg-gray-900'>
            <div className='mx-auto max-w-6xl px-4'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white'>
                        Common Questions
                    </h2>
                    <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
                        Quick answers to help you get started
                    </p>
                </div>

                <div className='mt-12 grid gap-8 lg:grid-cols-2'>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className='rounded-xl bg-white p-6 shadow-md dark:bg-gray-800'>
                            <h3 className='mb-3 text-lg font-semibold text-gray-900 dark:text-white'>
                                {faq.question}
                            </h3>
                            <p className='text-gray-600 dark:text-gray-300'>{faq.answer}</p>
                        </div>
                    ))}
                </div>

                <div className='mt-12 text-center'>
                    <Link
                        href='/pricing#faq'
                        className='inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'>
                        View all FAQs
                        <svg
                            className='ml-2 h-5 w-5'
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
            </div>
        </section>
    );
};

export default FAQPreview;