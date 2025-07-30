import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import NavigationBar from '@/app/(MainApp)/NavigationBar';
import '@/app/globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'AUTOZEN - Automated Social Media Management',
    description: 'Grow your business at the speed of automation with AUTOZEN. AI-powered social media posting and content generation.'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}>
                <ThemeProvider attribute='class'>
                    <div className='min-h-screen font-[family-name:var(--font-geist-sans)]'>
                        <div className='sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80'>
                            <div className='mx-auto max-w-7xl py-3'>
                                <NavigationBar />
                            </div>
                        </div>
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
