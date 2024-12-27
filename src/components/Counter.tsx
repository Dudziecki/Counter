import React from 'react';
import '../components/style.css';

type TextAreaPropsType = {
    value: number;
    isMaxValue: boolean;
};

export const Counter = () => {
    const [value, setValue] = React.useState(0);
    const maxValue = 5;
    const [isResetDisabled, setIsResetDisabled] = React.useState(true);
    const [isIncDisabled, setIsIncDisabled] = React.useState(false);

    const onIncBtnClickHandler = () => {
        if (value < maxValue) {
            const newValue = value + 1;
            setValue(newValue);
            setIsResetDisabled(false);

            if (newValue === maxValue) {
                setIsIncDisabled(true); // Блокируем кнопку INC, если достигнут maxValue
            }
        }
    };

    const onResBtnClickHandler = () => {
        setValue(0);
        setIsResetDisabled(true);
        setIsIncDisabled(false); // Снимаем блокировку с кнопки INC
    };

    return (
        <div>
            <TextArea value={value} isMaxValue={value === maxValue} />
            <div className='wrapper'>
                <button className='btn' onClick={onIncBtnClickHandler} disabled={isIncDisabled}>
                    INC
                </button>
                <button className='btn' onClick={onResBtnClickHandler} disabled={isResetDisabled}>
                    RES
                </button>
            </div>
        </div>
    );
};

const TextArea: React.FC<TextAreaPropsType> = ({ value, isMaxValue }) => {
    return (
        <div
            className='styledOutput'
            style={{
                color: isMaxValue ? 'red' : 'black', // Изменяем цвет текста при достижении maxValue
            }}
        >
            {value}
        </div>
    );
};
