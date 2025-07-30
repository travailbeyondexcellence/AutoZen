import NavigationBar from '@/app/(MainApp)/NavigationBar';
import PricingSection from '@/app/(MainApp)/PricingSection';

const PricingPage = () => {
    return (
        <main className='font-[family-name:var(--font-geist-sans)]'>
            <div className='sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80'>
                <div className='mx-auto max-w-7xl pt-6'>
                    <NavigationBar />
                </div>
            </div>
            <PricingSection />
        </main>
    );
};

export default PricingPage;