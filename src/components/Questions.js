import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Questions = () => {
    const loadData = useLoaderData();
    const topicsData = loadData.data;
    const { name } = topicsData;
  
    const questions = topicsData.questions;

    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
            <h1 className='text-center text-2xl mt-5'>Topic: {name}</h1>
            {
                questions.map(ques => <Question
                    key={ques.id}
                    ques={ques}
                ></Question>)
            }
        </div>
    );
};

export default Questions;