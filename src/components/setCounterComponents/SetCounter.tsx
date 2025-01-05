import React, {useEffect, useState} from 'react';
import '../styles/style.css'

import {InputComponent} from "./InputComponent";
import {ButtonComponent} from "./ButtonComponent";


export const SetCounter: React.FC = () => {
    let [maxValue, setMaxValue] = useState(() => {
        const savedValue = localStorage.getItem('Max Value');
        return savedValue ? JSON.parse(savedValue) : 5;
    })

    let [startValue, setStartValue] = useState(() => {
        const savedValue = localStorage.getItem('Start Value');
        return savedValue ? JSON.parse(savedValue) : 0;
    })
    let[error,setError]=useState(false)


    const startValueClickHandler=()=>{
        if(startValue<0 || maxValue < 0 || startValue >= maxValue){
            setError(!error)
            return
        }
        localStorage.setItem('Max Value', JSON.stringify(maxValue));
        localStorage.setItem('Start Value', JSON.stringify(startValue));
    }
    return (
        <div className="CounterStyled">
            <div className='InputContainer'>
                <InputComponent
                    label='max value'
                    value={maxValue}
                    onChange={setMaxValue}
                    className={error? 'Error': 'InputStyled'}
                />
                <InputComponent
                    label='start value'
                    value={startValue}
                    onChange={setStartValue}
                    className={error? 'Error': 'InputStyled'}
                />
            </div>

            <ButtonComponent
                title='set'
                onClick={startValueClickHandler}
            />

        </div>
    );
};


