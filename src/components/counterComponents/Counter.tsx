import React, {useEffect, useState} from 'react';
import '../styles/style.css';

import {Button} from "../Button";
import {Display} from "../counterComponents/Display";

type CounterPropsType = {
    value:number
    maxValue:number
    incrementFunc:()=>void
    resetFunc:()=>void
    isResetDisabled:boolean
    isIncDisabled:boolean
}
export const Counter: React.FC<CounterPropsType>= ({value,maxValue,incrementFunc,resetFunc,isResetDisabled,isIncDisabled}) => {

    const resultValue=value === maxValue
    return (
        <div className='CounterStyled'>
            <Display value={value} isMaxValue={resultValue}/>
            <div className='wrapper'>
                <Button className='btn' onClick={incrementFunc} disabled={isIncDisabled}>INC</Button>
                <Button className='btn' onClick={resetFunc} disabled={isResetDisabled}>RES</Button>
            </div>
        </div>
    );
};


