import React from 'react';
import '../styles/style.css';
import { InputComponent } from "./InputComponent";
import { Button } from "../Button";

type SetCounterProps = {
    startValue: number;
    maxValue: number;
    setStartValue: (startValue: number) => void;
    setMaxValue: (maxValue: number) => void;
    onClickValue: () => void;
    isSet: boolean;
    isError: boolean;
};

export const SetCounter: React.FC<SetCounterProps> = ({
                                                          startValue,
                                                          maxValue,
                                                          setStartValue,
                                                          setMaxValue,
                                                          onClickValue,
                                                          isSet,
                                                          isError
                                                      }) => {
    return (
        <div className="CounterStyled">
            <div className='InputContainer'>
                <InputComponent
                    label='max value'
                    value={maxValue}
                    onChange={setMaxValue}
                    className='InputStyled'
                    isError={isError}
                />
                <InputComponent
                    label='start value'
                    value={startValue}
                    onChange={setStartValue}
                    className='InputStyled'
                    isError={isError}
                />
            </div>
            <div className='wrapper'>
                <Button className='btn' onClick={onClickValue} disabled={isSet || isError}>set</Button>
            </div>
        </div>
    );
};
