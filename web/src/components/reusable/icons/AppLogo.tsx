import React, { HTMLAttributes } from 'react';

interface AppLogoProps extends HTMLAttributes<HTMLDivElement> {
    fontSize?: string;
}

const AppLogo: React.FC<AppLogoProps> = ({
    fontSize="1.5rem",
}) => {
    return (
        <div
            className='font-bold select-none'
            style={{
                fontSize,
            }}
        >
            <span
                className='text-l-primary dark:text-d-primary'
            >
                Fresh
            </span>
            <span
                className='text-l-primaryDark dark:text-d-primaryDark'
            >
                Stock
            </span>
        </div>
    )
}

export default AppLogo;
