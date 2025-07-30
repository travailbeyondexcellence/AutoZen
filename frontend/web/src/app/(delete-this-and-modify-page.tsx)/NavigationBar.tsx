import Link from 'next/link';

import ThemeSwitch from '@/app/(delete-this-and-modify-page.tsx)/ThemeSwitch';

const NavigationBar = () => {
    return (
        <div className='flex w-full items-center justify-between px-6'>
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
            <ThemeSwitch />
        </div>
    );
};

export default NavigationBar;
