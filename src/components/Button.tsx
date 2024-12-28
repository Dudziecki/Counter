import React, {ReactNode} from 'react';

type ButtonPropsType = {
    children?: ReactNode
    onClick: () => void
    className?: string
    disabled: boolean
}
export const Button: React.FC<ButtonPropsType> = ({children, onClick, className, disabled}) => {
    return (
        <button onClick={() => onClick()} className={className} disabled={disabled}>{children}</button>
    );
};

