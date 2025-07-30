const OurValues = () => {
    const values = [
        {
            title: 'Simplicity',
            description: 'Making social media management accessible to everyone',
            color: 'from-blue-500 to-blue-600',
        },
        {
            title: 'Authenticity',
            description: 'Helping brands maintain their unique voice',
            color: 'from-purple-500 to-purple-600',
        },
        {
            title: 'Innovation',
            description: 'Continuously improving our AI and automation',
            color: 'from-pink-500 to-pink-600',
        },
        {
            title: 'Transparency',
            description: 'Clear pricing, no hidden features',
            color: 'from-green-500 to-green-600',
        },
    ];

    return (
        <section className='py-20'>
            <div className='mx-auto max-w-6xl px-4'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white'>
                        Our Values
                    </h2>
                    <p className='mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
                        The principles that guide everything we do at AUTOZEN
                    </p>
                </div>

                <div className='mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className='group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800'>
                            <div
                                className={`absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br ${value.color} opacity-10 transition-all group-hover:scale-110`}
                            />
                            <h3 className='relative mb-3 text-xl font-bold text-gray-900 dark:text-white'>
                                {value.title}
                            </h3>
                            <p className='relative text-gray-600 dark:text-gray-300'>
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;