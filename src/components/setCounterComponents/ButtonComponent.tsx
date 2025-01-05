import React from 'react';

type ButtonComponentPropsType = {
    title: string,
    onClick: Function,
}
export const ButtonComponent:React.FC<ButtonComponentPropsType> = ({title,onClick}) => {
    return (
        <div className='ButtonContainerStyled'>
            <button className='btn' onClick={()=>onClick()}>{title}</button>
        </div>
    );
};

