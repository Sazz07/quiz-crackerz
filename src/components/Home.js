import React from 'react';
import { Link } from 'react-router-dom';
import Topics from './Topics';

const Home = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
            <div className='flex flex-col items-center justify-between lg:flex-row'>
                <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                    <div className='max-w-xl mb-6 lg:mt-8'>
                        <div>
                            <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-emerald-300'>
                                Let's Join
                            </p>
                        </div>
                        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                        Welcome, & Participate <br className='hidden md:block' /> to Our{' '}
                            <span className='inline-block text-emerald-600'>Quiz Show</span>
                        </h2>
                        <p className='text-base text-gray-700 md:text-lg'>
                            Take some few moments and test your skill. These quiz gonna help you to test your skill. We have some very important question about some very important subject.
                        </p>
                    </div>
                    <div className='flex flex-col items-center md:flex-row'>
                        <Link
                            to='/topics'
                            className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-emerald-400 hover:bg-emerald-700 focus:shadow-outline focus:outline-none'
                        >
                            <span className='mr-3'>Select Topic</span>
                        </Link>
                    </div>
                </div>
                <div className='relative lg:w-1/2 '>
                    <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                        src="https://img.freepik.com/free-vector/quiz-show-concept-illustration_114360-9771.jpg?w=900&t=st=1665459157~exp=1665459757~hmac=de3edfa8ea4bd73d835d44257e8a41499e32d14b07e27e2faa780f3ae6756f38"
                        alt=""
                    />
                    </div>
                </div>
            </div>
            <Topics></Topics>
        </div>
    );
};

export default Home;