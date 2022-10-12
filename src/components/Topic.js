import React from 'react';

const Topic = ({ topic }) => {
  const {name, logo, total } = topic;

  return (
    <div className='bg-emerald-200 p-6 rounded shadow-lg'>
      <img
        className='bg-gray-700 object-cover w-full h-screen mb-6 rounded shadow-xl md:h-64 xl:h-70'
        src={logo}
        alt=''
      />
      <p className='mb-2 text-gray-900 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
      <p className='text-gray-900 font-bold'>Total: {total}</p>
      <button
        type='button'
        className='px-8 block w-full mt-4 py-3 font-semibold rounded bg-emerald-500 text-gray-100 hover:bg-emerald-700'
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Topic;