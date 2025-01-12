import React from "react";

type TextAreaPropsType = {
    value?: number;
    isMaxValue?: boolean;
    isSet: boolean;
    startValue: number;
    isError: boolean;
};

export const Display: React.FC<TextAreaPropsType> = ({ value, isMaxValue, isSet, startValue, isError }) => {
    return (
        <h1
            className='styledOutput'
            style={{
                color: isMaxValue ? 'red' : 'black',
            }}
        >
            {isError ? 'Incorrect input' : isSet ? value : 'Please enter the values and click set'}
        </h1>
    );
};
