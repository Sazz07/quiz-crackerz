import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Questions = () => {
    const loadData = useLoaderData();
    const topicsData = loadData.data;
    const { name } = topicsData;
    // console.log(topicsData);
    const questions = topicsData.questions;
    // console.log(questions);
    return (
        <div>
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