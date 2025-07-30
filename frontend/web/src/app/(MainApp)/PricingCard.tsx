import Link from 'next/link';

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    buttonText: string;
    buttonHref: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
    title,
    price,
    description,
    features,
    isPopular = false,
    buttonText,
    buttonHref,
}) => {
    return (
        <div
            className={`relative rounded-2xl border ${
                isPopular ? 'border-blue-600 shadow-xl' : 'border-gray-200 dark:border-gray-700'
            } bg-white p-8 dark:bg-gray-800`}>
            {isPopular && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white'>
                    Most Popular
                </div>
            )}
            <div className='mb-6'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>{title}</h3>
                <p className='mt-2 text-gray-600 dark:text-gray-300'>{description}</p>
                <div className='mt-4'>
                    <span className='text-4xl font-bold text-gray-900 dark:text-white'>{price}</span>
                    <span className='text-gray-600 dark:text-gray-300'>/month</span>
                </div>
            </div>
            <ul className='mb-8 space-y-3'>
                {features.map((feature, index) => (
                    <li key={index} className='flex items-start'>
                        <svg
                            className='mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500'
                            fill='currentColor'
                            viewBox='0 0 20 20'>
                            <path
                                fillRule='evenodd'
                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                        <span className='text-gray-700 dark:text-gray-300'>{feature}</span>
                    </li>
                ))}
            </ul>
            <Link
                href={buttonHref}
                className={`block w-full rounded-lg px-6 py-3 text-center font-medium transition-colors ${
                    isPopular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}>
                {buttonText}
            </Link>
        </div>
    );
};

export default PricingCard;