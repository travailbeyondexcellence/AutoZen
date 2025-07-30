import Link from 'next/link';

import ThemeSwitch from '@/app/(MainApp)/ThemeSwitch';

const NavigationBar = () => {
    return (
        <div className='relative flex w-full items-center px-6'>
            <div className='flex-1'>
                <Link 
                    href='/' 
                    className='inline-block text-2xl font-bold text-blue-600'
                    style={{
                        background: 'linear-gradient(to right, #2563eb, #9333ea)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}>
                    AUTOZEN
                </Link>
            </div>
            <nav className='flex items-center gap-6'>
                <Link href='/' className='text-sm font-medium transition-colors hover:text-neutral-600 dark:hover:text-neutral-300'>
                    Home
                </Link>
                <Link href='/about' className='text-sm font-medium transition-colors hover:text-neutral-600 dark:hover:text-neutral-300'>
                    About
                </Link>
                <Link href='/pricing' className='text-sm font-medium transition-colors hover:text-neutral-600 dark:hover:text-neutral-300'>
                    Pricing
                </Link>
                <Link href='/contact' className='text-sm font-medium transition-colors hover:text-neutral-600 dark:hover:text-neutral-300'>
                    Contact
                </Link>
            </nav>
            <div className='flex flex-1 justify-end'>
                <ThemeSwitch />
            </div>
        </div>
    );
};

export default NavigationBar;
