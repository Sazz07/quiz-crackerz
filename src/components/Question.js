import React from 'react';
import { toast } from 'react-toastify';
import Options from './Options';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ ques }) => {
    const { question, correctAnswer } = ques;
    const options = ques.options;
    const click = e => {
        if (correctAnswer === e.target.innerHTML) {
            return toast.success('Correct Answer !!', { autoClose: 2000 });
        }
        else {
            return toast.error('Info: Product Added!', { autoClose: 2000 });
        }
    }

    const hint = () => {
        if (correctAnswer) {
            return toast.success(`${correctAnswer}`, {
                position: "top-center",
                autoClose: 3000,
                theme: "light",
            });
        }
    }

    return (
        <div className="mt-5 max-w-2xl px-6 py-8 mx-auto space-y-8 border">
            <div className=" text-gray-900 font-semibold md:flex flex-row justify-between ">
                <p>{question.slice(3, -4)}</p>
                <button onClick={hint}><EyeIcon className="h-5 w-5 text-gray-800 hover:text-emerald-600" /></button>
            </div>
            <div>
                <div className="py-4 space-y-5 border-t border-dashed border-gray-400">
                    {
                        options.map((option, index) => <Options
                            key={index}
                            click={click}
                            option={option}
                        ></Options>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;