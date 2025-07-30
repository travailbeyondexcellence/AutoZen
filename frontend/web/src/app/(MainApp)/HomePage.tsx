import NavigationBar from '@/app/(MainApp)/NavigationBar';

const HomePage: React.FC = () => {
    return (
        <main className='mx-auto flex h-screen max-w-7xl flex-col pt-6 font-[family-name:var(--font-geist-sans)]'>
            <NavigationBar />
            <div className='flex flex-1 items-center justify-center'>
                <h1 className='text-4xl font-bold'>Home Page</h1>
            </div>
        </main>
    );
};

export default HomePage;
