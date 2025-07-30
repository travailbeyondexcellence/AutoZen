import CompanyInfo from '@/app/(MainApp)/CompanyInfo';
import ContactForm from '@/app/(MainApp)/ContactForm';
import ContactHero from '@/app/(MainApp)/ContactHero';
import ContactOptions from '@/app/(MainApp)/ContactOptions';
import ContactResources from '@/app/(MainApp)/ContactResources';
import CTA from '@/app/(MainApp)/CTA';
import FAQPreview from '@/app/(MainApp)/FAQPreview';
import NavigationBar from '@/app/(MainApp)/NavigationBar';

const ContactPage = () => {
    return (
        <main className='font-[family-name:var(--font-geist-sans)]'>
            <div className='sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80'>
                <div className='mx-auto max-w-7xl pt-6'>
                    <NavigationBar />
                </div>
            </div>
            <ContactHero />
            <ContactOptions />
            <ContactForm />
            <FAQPreview />
            <CompanyInfo />
            <ContactResources />
            <CTA />
        </main>
    );
};

export default ContactPage;