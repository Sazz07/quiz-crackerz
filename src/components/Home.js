import React from 'react';
import Topics from './Topics';

const Home = () => {
    return (
        <div>
            <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-emerald-300">
                                    Let's Start
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Welcome, & Participate
                                <br className="hidden md:block" />
                                To Our{' '}
                                <span className="inline-block text-emerald-600">
                                    Quiz
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae. explicabo.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-emerald-500 hover:bg-emerald-700 focus:shadow-outline focus:outline-none"
                            >
                                Start Quiz
                            </a>
                        </div>
                    </div>
                </div>
                <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                        src="https://img.freepik.com/free-vector/quiz-show-concept-illustration_114360-9771.jpg?w=900&t=st=1665459157~exp=1665459757~hmac=de3edfa8ea4bd73d835d44257e8a41499e32d14b07e27e2faa780f3ae6756f38"
                        alt=""
                    />
                </div>
            </div>
            <Topics></Topics>
        </div>
    );
};

export default Home;