import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`../topic/${id}`);
    }
    return (
        <div className='bg-emerald-200 p-6 rounded shadow-lg'>
            <img
                className='bg-gray-700 object-cover w-full h-screen mb-6 rounded shadow-xl md:h-64 xl:h-70'
                src={logo}
                alt=''
            />
            <p className='mb-2 text-gray-900 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
            <p className='text-gray-900 font-bold'>Total Quiz: {total}</p>
            <button onClick={handleNavigate}
                type='button'
                className='px-8 block w-full mt-4 py-3 font-semibold rounded bg-emerald-500 text-gray-100 hover:bg-emerald-700'
            >
                Start Quiz
            </button>
        </div>
    );
};

export default Topic;