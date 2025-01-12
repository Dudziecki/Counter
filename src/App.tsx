import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from "./components/counterComponents/Counter";
import { SetCounter } from "./components/setCounterComponents/SetCounter";

function App() {
    const [value, setValue] = useState(() => {
        const savedValue = localStorage.getItem('Increment Value');
        return savedValue ? JSON.parse(savedValue) : 0;
    });

    const [maxValue, setMaxValue] = useState(() => {
        const savedValue = localStorage.getItem('Max Value');
        return savedValue ? JSON.parse(savedValue) : 5;
    });

    const [startValue, setStartValue] = useState(() => {
        const newStartValue = localStorage.getItem('Start Value');
        return newStartValue ? JSON.parse(newStartValue) : 0;
    });

    const [isSet, setIsSet] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const storedStartValue = localStorage.getItem('Start Value');
        const storedMaxValue = localStorage.getItem('Max Value');

        if (
            storedStartValue !== null && storedMaxValue !== null &&
            (startValue !== JSON.parse(storedStartValue) || maxValue !== JSON.parse(storedMaxValue))
        ) {
            setIsSet(false);
        }
    }, [startValue, maxValue]);

    useEffect(() => {
        if (startValue < 0 || maxValue < 0 || startValue >= maxValue) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    }, [startValue, maxValue]);

    const isResetDisabled = value === 0;
    const isIncDisabled = value === maxValue;

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

    const startValueClickHandler = () => {
        if (startValue < 0 || maxValue < 0 || startValue >= maxValue) return;
        localStorage.setItem('Max Value', JSON.stringify(maxValue));
        localStorage.setItem('Start Value', JSON.stringify(startValue));
        setValue(startValue);
        setIsSet(true);
    };

    return (
        <div className="App">
            <SetCounter
                startValue={startValue}
                maxValue={maxValue}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                onClickValue={startValueClickHandler}
                isSet={isSet}
                isError={isError}
            />
            <Counter
                value={value}
                maxValue={maxValue}
                incrementFunc={onIncBtnClickHandler}
                resetFunc={onResBtnClickHandler}
                isResetDisabled={isResetDisabled}
                isIncDisabled={isIncDisabled}
                isSet={isSet}
                startValue={startValue}
                isError={isError}
            />
        </div>
    );
}

export default App;
