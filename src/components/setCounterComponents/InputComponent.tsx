import React from 'react';
import '../styles/style.css'

type InputComponentPropsType = {
    label: string
    value: number
    onChange?: (value: number) => void
    className: string
}
export const InputComponent:React.FC<InputComponentPropsType> = ({label,value,onChange,className}) => {
    return (
        <div className='InputContainerStyled'>
            <label htmlFor="valueType" className='label'>{label}:</label>
            <input type="number"
                   name='valueType'
                   value={value}
                   className={className}
                   onChange={(e) => {
                if (onChange) onChange(Number(e.target.value));
            }}/>
        </div>
    );
};

