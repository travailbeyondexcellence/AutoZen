import AboutHero from '@/app/(MainApp)/AboutHero';
import HowItWorks from '@/app/(MainApp)/HowItWorks';
import OurStory from '@/app/(MainApp)/OurStory';
import OurValues from '@/app/(MainApp)/OurValues';
import SocialProof from '@/app/(MainApp)/SocialProof';
import WhatMakesDifferent from '@/app/(MainApp)/WhatMakesDifferent';

const AboutPage = () => {
    return (
        <main>
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