import { useTheme } from 'next-themes';
import React from 'react'
import { BurgerMenuRounded } from './icons';
import { ClearRounded } from './icons/ClearRounded.icon';

const BurgerMenuButton = ({
    open,
    handleClick
}) => {

    const { theme, setTheme } = useTheme();

    return (
        <button 
            onClick={handleClick}
            className={`grid place-content-center rounded ${theme==="light" ? "hover:bg-l-primaryLight" : "hover:bg-slate-600"} p-2`}
        >
            {
                open ?
                <ClearRounded 
                    className="text-l-primaryDark dark:text-white"
                />
                    :
                <BurgerMenuRounded 
                    className="text-l-primaryDark dark:text-white"
                />
            }
        </button>
    )
}

export default BurgerMenuButton
