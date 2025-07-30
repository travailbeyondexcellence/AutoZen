'use client';

import { useState } from 'react';

import PricingCard from '@/app/(MainApp)/PricingCard';

const pricingPlans = {
    monthly: [
        {
            title: 'Free',
            price: '$0',
            description: 'Get started with basic automation',
            features: [
                '3 automation workflows',
                '10 scheduled tasks per workflow',
                '1 user',
                'Basic integrations',
                'Community support',
            ],
            buttonText: 'Get Started Free',
            buttonHref: '/contact',
        },
        {
            title: 'Essentials',
            price: '$6',
            priceDetail: 'per workflow/month',
            description: 'For professionals and small teams',
            features: [
                'Unlimited scheduled tasks',
                'Advanced integrations',
                'Analytics & reporting',
                'Email support',
                '30-day data retention',
                'API access',
                'Custom workflows',
            ],
            isPopular: true,
            buttonText: 'Start 14-day Free Trial',
            buttonHref: '/contact',
        },
        {
            title: 'Team',
            price: '$12',
            priceDetail: 'per workflow/month',
            description: 'For growing teams',
            features: [
                'Everything in Essentials',
                'Unlimited team members',
                'Advanced analytics',
                'Priority support',
                '90-day data retention',
                'Team collaboration tools',
                'Custom integrations',
                'Approval workflows',
            ],
            buttonText: 'Start 14-day Free Trial',
            buttonHref: '/contact',
        },
        {
            title: 'Agency',
            price: '$120',
            priceDetail: 'per 10 workflows/month',
            description: 'For agencies and large organizations',
            features: [
                'Everything in Team',
                'White-label options',
                'Dedicated account manager',
                'Custom onboarding',
                'Unlimited data retention',
                'SSO & advanced security',
                'SLA guarantee',
                'Custom training sessions',
            ],
            buttonText: 'Contact Sales',
            buttonHref: '/contact',
        },
    ],
    annual: [
        {
            title: 'Free',
            price: '$0',
            description: 'Get started with basic automation',
            features: [
                '3 automation workflows',
                '10 scheduled tasks per workflow',
                '1 user',
                'Basic integrations',
                'Community support',
            ],
            buttonText: 'Get Started Free',
            buttonHref: '/contact',
        },
        {
            title: 'Essentials',
            price: '$5',
            priceDetail: 'per workflow/month',
            originalPrice: '$6',
            description: 'For professionals and small teams',
            features: [
                'Unlimited scheduled tasks',
                'Advanced integrations',
                'Analytics & reporting',
                'Email support',
                '30-day data retention',
                'API access',
                'Custom workflows',
            ],
            isPopular: true,
            buttonText: 'Start 14-day Free Trial',
            buttonHref: '/contact',
        },
        {
            title: 'Team',
            price: '$10',
            priceDetail: 'per workflow/month',
            originalPrice: '$12',
            description: 'For growing teams',
            features: [
                'Everything in Essentials',
                'Unlimited team members',
                'Advanced analytics',
                'Priority support',
                '90-day data retention',
                'Team collaboration tools',
                'Custom integrations',
                'Approval workflows',
            ],
            buttonText: 'Start 14-day Free Trial',
            buttonHref: '/contact',
        },
        {
            title: 'Agency',
            price: '$100',
            priceDetail: 'per 10 workflows/month',
            originalPrice: '$120',
            description: 'For agencies and large organizations',
            features: [
                'Everything in Team',
                'White-label options',
                'Dedicated account manager',
                'Custom onboarding',
                'Unlimited data retention',
                'SSO & advanced security',
                'SLA guarantee',
                'Custom training sessions',
            ],
            buttonText: 'Contact Sales',
            buttonHref: '/contact',
        },
    ],
};

const PricingSection = () => {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

    return (
        <section className='py-20'>
            <div className='mx-auto max-w-7xl px-4'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
                        14 days free. No credit card required.
                    </h1>
                    <p className='mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
                        At the end of your trial, continue with a free plan or upgrade for advanced features.
                    </p>
                    
                    <div className='mt-8 flex items-center justify-center gap-4'>
                        <button
                            onClick={() => setBillingPeriod('monthly')}
                            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
                                billingPeriod === 'monthly'
                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                            }`}>
                            Monthly billing
                        </button>
                        <button
                            onClick={() => setBillingPeriod('annual')}
                            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
                                billingPeriod === 'annual'
                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                            }`}>
                            Annual billing
                            <span className='ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-900 dark:text-green-300'>
                                Save 20%
                            </span>
                        </button>
                    </div>
                </div>
                
                <div className='mt-16 grid gap-8 lg:grid-cols-4'>
                    {pricingPlans[billingPeriod].map((plan, index) => (
                        <PricingCard key={`${billingPeriod}-${index}`} {...plan} />
                    ))}
                </div>
                
                <div className='mt-20'>
                    <div className='rounded-lg bg-gray-50 p-8 text-center dark:bg-gray-800'>
                        <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                            Compare plan features
                        </h3>
                        <p className='mt-2 text-gray-600 dark:text-gray-300'>
                            All plans include core features to help you automate with confidence
                        </p>
                    </div>
                    
                    <div className='mt-8 overflow-x-auto'>
                        <table className='w-full'>
                            <thead>
                                <tr className='border-b border-gray-200 dark:border-gray-700'>
                                    <th className='px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white'>
                                        Feature
                                    </th>
                                    <th className='px-4 py-3 text-center text-sm font-medium text-gray-900 dark:text-white'>
                                        Free
                                    </th>
                                    <th className='px-4 py-3 text-center text-sm font-medium text-gray-900 dark:text-white'>
                                        Essentials
                                    </th>
                                    <th className='px-4 py-3 text-center text-sm font-medium text-gray-900 dark:text-white'>
                                        Team
                                    </th>
                                    <th className='px-4 py-3 text-center text-sm font-medium text-gray-900 dark:text-white'>
                                        Agency
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Workflow automation', '3', 'Unlimited', 'Unlimited', 'Unlimited'],
                                    ['Scheduled tasks', '10/workflow', 'Unlimited', 'Unlimited', 'Unlimited'],
                                    ['Team members', '1', '1', 'Unlimited', 'Unlimited'],
                                    ['API access', '❌', '✓', '✓', '✓'],
                                    ['Analytics', 'Basic', 'Advanced', 'Advanced', 'Advanced'],
                                    ['Support', 'Community', 'Email', 'Priority', 'Dedicated'],
                                    ['Data retention', '7 days', '30 days', '90 days', 'Unlimited'],
                                    ['Custom integrations', '❌', 'Limited', '✓', '✓'],
                                    ['White-label', '❌', '❌', '❌', '✓'],
                                ].map(([feature, ...values], index) => (
                                    <tr
                                        key={index}
                                        className='border-b border-gray-100 dark:border-gray-800'>
                                        <td className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
                                            {feature}
                                        </td>
                                        {values.map((value, idx) => (
                                            <td
                                                key={idx}
                                                className='px-4 py-3 text-center text-sm text-gray-600 dark:text-gray-300'>
                                                {value}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;