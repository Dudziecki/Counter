import React, {useState} from 'react';
import './styles/style.css';
import {Display} from "./Display";
import {Button} from "./Button";


export const Counter: React.FC = () => {
    const [value, setValue] = useState(0);
    const maxValue = 5;
    const isResetDisabled=value===0
    const isIncDisabled=value === maxValue

    const onIncBtnClickHandler = () => {
        if (value < maxValue) {
            const newValue = value + 1;
            setValue(newValue);

        }
    };

    const onResBtnClickHandler = () => {
        setValue(0);

    };

    return (
        <div className='CounterStyled'>
            <Display value={value} isMaxValue={value === maxValue}/>
            <div className='wrapper'>
                <Button className='btn' onClick={onIncBtnClickHandler} disabled={isIncDisabled}>INC</Button>
                <Button className='btn' onClick={onResBtnClickHandler} disabled={isResetDisabled}>RES</Button>
            </div>
        </div>
    );
};


