import CompanyInfo from '@/app/(MainApp)/CompanyInfo';
import ContactForm from '@/app/(MainApp)/ContactForm';
import ContactHero from '@/app/(MainApp)/ContactHero';
import ContactOptions from '@/app/(MainApp)/ContactOptions';
import ContactResources from '@/app/(MainApp)/ContactResources';
import CTA from '@/app/(MainApp)/CTA';
import FAQPreview from '@/app/(MainApp)/FAQPreview';

const ContactPage = () => {
    return (
        <main>
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