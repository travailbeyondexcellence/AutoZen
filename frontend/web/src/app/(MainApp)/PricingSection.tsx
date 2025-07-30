import PricingCard from '@/app/(MainApp)/PricingCard';

const pricingPlans = [
    {
        title: 'Starter',
        price: '$15',
        description: 'Perfect for individuals and small projects',
        features: [
            'Up to 10 workflows',
            '1,000 automation runs/month',
            'Basic integrations',
            'Email support',
            '7-day data retention',
        ],
        buttonText: 'Start Free Trial',
        buttonHref: '/contact',
    },
    {
        title: 'Professional',
        price: '$49',
        description: 'For growing teams and businesses',
        features: [
            'Unlimited workflows',
            '10,000 automation runs/month',
            'Advanced integrations',
            'Priority support',
            '30-day data retention',
            'Team collaboration',
            'Custom workflows',
        ],
        isPopular: true,
        buttonText: 'Start Free Trial',
        buttonHref: '/contact',
    },
    {
        title: 'Enterprise',
        price: '$199',
        description: 'For large organizations with advanced needs',
        features: [
            'Everything in Professional',
            'Unlimited automation runs',
            'Custom integrations',
            'Dedicated support',
            'Unlimited data retention',
            'SSO & advanced security',
            'SLA guarantee',
            'Custom training',
        ],
        buttonText: 'Contact Sales',
        buttonHref: '/contact',
    },
];

const PricingSection = () => {
    return (
        <section className='py-20'>
            <div className='mx-auto max-w-7xl px-4'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
                        Simple, transparent pricing
                    </h1>
                    <p className='mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
                        Choose the perfect plan for your needs. Always flexible to scale up or down.
                    </p>
                </div>
                <div className='mt-16 grid gap-8 lg:grid-cols-3'>
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
                <div className='mt-16 rounded-lg bg-gray-50 p-8 text-center dark:bg-gray-800'>
                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                        All plans include
                    </h3>
                    <div className='mt-6 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4'>
                        {[
                            '14-day free trial',
                            'No credit card required',
                            'Cancel anytime',
                            'Free migrations',
                        ].map((feature, index) => (
                            <div key={index} className='flex items-center'>
                                <svg
                                    className='mr-2 h-5 w-5 text-green-500'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'>
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                                <span className='text-gray-700 dark:text-gray-300'>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;