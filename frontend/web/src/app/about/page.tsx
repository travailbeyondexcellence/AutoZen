import AboutHero from '@/app/(MainApp)/AboutHero';
import HowItWorks from '@/app/(MainApp)/HowItWorks';
import NavigationBar from '@/app/(MainApp)/NavigationBar';
import OurStory from '@/app/(MainApp)/OurStory';
import OurValues from '@/app/(MainApp)/OurValues';
import SocialProof from '@/app/(MainApp)/SocialProof';
import WhatMakesDifferent from '@/app/(MainApp)/WhatMakesDifferent';

const AboutPage = () => {
    return (
        <main className='font-[family-name:var(--font-geist-sans)]'>
            <div className='sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80'>
                <div className='mx-auto max-w-7xl pt-6'>
                    <NavigationBar />
                </div>
            </div>
            <AboutHero />
            <OurStory />
            <WhatMakesDifferent />
            <HowItWorks />
            <OurValues />
            <SocialProof />
        </main>
    );
};

export default AboutPage;