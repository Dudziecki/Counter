import React, {useEffect, useState} from 'react';
import '../styles/style.css'

import {InputComponent} from "./InputComponent";

import {Button} from "../Button";

type SetCounterProps = {
    startValue: number
    maxValue: number
    setStartValue: (startValue:number)=>void
    setMaxValue:( maxValue: number)=>void
    onClickValue:()=>void
}
export const SetCounter: React.FC<SetCounterProps> = ({startValue,maxValue,setStartValue,setMaxValue,onClickValue}) => {

    return (
        <div className="CounterStyled">
            <div className='InputContainer'>
                <InputComponent
                    label='max value'
                    value={maxValue}
                    onChange={setMaxValue}
                    className= 'InputStyled'
                />
                <InputComponent
                    label='start value'
                    value={startValue}
                    onChange={setStartValue}
                    className= 'InputStyled'
                />
            </div>
            <div className='wrapper'>
                <Button className='btn' onClick={()=>onClickValue()} disabled={false}>set</Button>
            </div>


        </div>
    );
};


