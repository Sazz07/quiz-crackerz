import React from 'react';

const Options = ({ option, click}) => {

    // console.log(option);
    // const click = (e) => {
    //     console.log(e.target.innerHTML);
    // }
    return (
        <div className='flex flex-wrap flex-col px-3 py-1 bg-gray-200 text-gray-900 rounded-sm hover:bg-gray-400'>
            <button onClick={click}><p>{option}</p></button>
        </div>
    );
};

export default Options;