import React from "react";
type TextAreaPropsType = {
    value?: number;
    isMaxValue?: boolean;
};
 export const Display: React.FC<TextAreaPropsType> = ({ value, isMaxValue }) => {
    return (
        <h1
            className='styledOutput'
            style={{
                color: isMaxValue ? 'red' : 'black',
            }}
        >
            {value}
        </h1>
    );
};