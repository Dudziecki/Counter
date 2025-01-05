import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counterComponents/Counter";
import {SetCounter} from "./components/setCounterComponents/SetCounter";


function App() {
    //functionality of Counter
    let savedValue;
    const [value, setValue] = useState(() => {
         savedValue = localStorage.getItem('Max Value');
        return savedValue ? JSON.parse(savedValue) : 0;
    });
    let stopValue = savedValue;
    const isResetDisabled = value === 0
    const isIncDisabled = value === stopValue

    const onIncBtnClickHandler = () => {

        if (value < maxValue) {

            const newValue = value + 1;
            setValue(newValue);

        }
    };
    useEffect(() => {
        localStorage.setItem('Increment Value', JSON.stringify(value));
    }, [value]);

    const onResBtnClickHandler = () => {
        setValue(0);

    };
    //functionality of setCounter
    const [maxValue, setMaxValue] = useState(() => {
        const savedValue = localStorage.getItem('Max Value');
        return savedValue ? JSON.parse(savedValue) : 5;
    })

    const [startValue, setStartValue] = useState(() => {
        const newStartValue = localStorage.getItem('Start Value');
        return newStartValue ? JSON.parse(newStartValue) : 0;
    })


    const startValueClickHandler = () => {
        if (startValue < 0 || maxValue < 0 || startValue >= maxValue) return
        localStorage.setItem('Max Value', JSON.stringify(maxValue));
        localStorage.setItem('Start Value', JSON.stringify(startValue));
    }

    return (
        <div className="App">
            <SetCounter startValue={startValue}
                        maxValue={maxValue}
                        setStartValue={setStartValue}
                        setMaxValue={setMaxValue}
                        onClickValue={startValueClickHandler}
            />
            <Counter value={value}
                     maxValue={maxValue}
                     incrementFunc={onIncBtnClickHandler}
                     resetFunc={onResBtnClickHandler}
                     isResetDisabled={isResetDisabled}
                     isIncDisabled={isIncDisabled}
            />

        </div>
    );
}

export default App;
