'use client';

import { useState } from 'react';

const faqs = [
    {
        question: 'What happens after my 14-day trial?',
        answer: 'If you decide to continue with a subscription after your trial, simply enter your payment details in your account settings. If you don\'t wish to upgrade, your account will automatically be downgraded to the Free plan. Any scheduled automations will continue to run as long as they don\'t exceed the Free plan limits.',
    },
    {
        question: 'What are the billing options for AUTOZEN\'s paid plans?',
        answer: 'You can choose to pay for your plan on a monthly or annual basis. By selecting annual billing, you\'ll receive a 20% discount. You can switch between monthly and annual billing at any time, and any necessary prorations or refunds will be automatically applied.',
    },
    {
        question: 'Does AUTOZEN have a free trial?',
        answer: 'Yes, we offer a 14-day free trial for our Essentials, Team, and Agency plans. During the trial, you can upgrade to a paid plan or switch to our Free plan at any time. You can also start using AUTOZEN for free right away by signing up for our Free plan without needing a trial period.',
    },
    {
        question: 'Can I change my plan at any time?',
        answer: 'Absolutely! You can upgrade, downgrade, or cancel your plan at any time. When you upgrade, you\'ll be charged a prorated amount for the remainder of your billing cycle. When you downgrade, we\'ll credit the unused portion of your payment to your account.',
    },
    {
        question: 'What payment methods does AUTOZEN accept?',
        answer: 'We accept all major credit and debit cards including Visa, Mastercard, American Express, Discover, JCB, and Diners Club. Unfortunately, we cannot accept PayPal, checks, or bank transfers at this time.',
    },
    {
        question: 'Do you offer discounts for nonprofits?',
        answer: 'Yes! AUTOZEN proudly offers a 50% discount on all paid plans for registered nonprofit and charity organizations. Contact our support team with your nonprofit documentation to apply for the discount.',
    },
    {
        question: 'What is the automation limit for each plan?',
        answer: 'The Free plan allows 3 workflows with up to 10 scheduled tasks per workflow. For the Essentials, Team, and Agency plans, you have unlimited workflows and scheduled tasks. This is subject to our fair use policy, which caps usage at 5,000 tasks per workflow per month.',
    },
    {
        question: 'Is my data secure with AUTOZEN?',
        answer: 'Security is our top priority. We use bank-level encryption to protect your data, and we\'re SOC 2 compliant. Our Agency plan includes additional security features like SSO and custom security policies. We never sell or share your data with third parties.',
    },
];

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='border-b border-gray-200 py-6 dark:border-gray-700'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='flex w-full items-start justify-between text-left'>
                <h3 className='text-lg font-medium text-gray-900 dark:text-white'>{question}</h3>
                <span className='ml-6 flex h-7 items-center'>
                    <svg
                        className={`h-6 w-6 transform text-gray-400 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 9l-7 7-7-7'
                        />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <div className='mt-4 pr-12'>
                    <p className='text-gray-600 dark:text-gray-300'>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    return (
        <section className='py-20'>
            <div className='mx-auto max-w-3xl px-4'>
                <h2 className='text-center text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white'>
                    Frequently asked questions
                </h2>
                <p className='mt-4 text-center text-lg text-gray-600 dark:text-gray-300'>
                    Everything you need to know about AUTOZEN pricing and plans
                </p>
                <div className='mt-12'>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
                <div className='mt-12 rounded-lg bg-gray-50 p-8 text-center dark:bg-gray-800'>
                    <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                        Still have questions?
                    </h3>
                    <p className='mt-2 text-gray-600 dark:text-gray-300'>
                        Can't find the answer you're looking for? Our support team is here to help.
                    </p>
                    <a
                        href='/contact'
                        className='mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'>
                        Contact support
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
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;