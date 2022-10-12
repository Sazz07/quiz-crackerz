import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ ques }) => {
    const { question } = ques;


    return (
        <div className="mt-5 max-w-2xl px-6 py-8 mx-auto space-y-8 border">
            <div className=" text-gray-900 font-semibold md:flex flex-row justify-between ">
                <p>{question.slice(3, -4)}</p>
                <button><EyeIcon className="h-5 w-5 text-gray-800 hover:text-emerald-600" /></button>
            </div>
            <div>
                <div className="py-4 space-y-5 border-t border-dashed border-gray-400">

                </div>
            </div>
        </div>
    );
};

export default Question;