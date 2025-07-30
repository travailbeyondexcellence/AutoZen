import CTA from '@/app/(MainApp)/CTA';
import Features from '@/app/(MainApp)/Features';
import Hero from '@/app/(MainApp)/Hero';

const HomePage: React.FC = () => {
    return (
        <main>
            <Hero />
            <Features />
            <CTA />
        </main>
    );
};

export default HomePage;
