import logger from '@utils/logger';
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';
import { DarkModeRounded, LightModeRounded } from './icons';

const DarkModeButton = () => {

    const { theme, setTheme } = useTheme();
    logger.info('theme', theme);

    const handleChangeTheme = () => {
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    if(!theme) {
        return (
            <div></div>
        )
    }
    return (
        <button 
            onClick={handleChangeTheme}
            className={`grid place-content-center rounded ${theme==="light" ? "hover:bg-yellow-50" : "hover:bg-slate-600"} p-2`}
        >
            {
                theme && theme === "light" ? 
                <div title='Switch to Dark Mode'>
                    <LightModeRounded 
                        className='text-yellow-300'
                    /> 
                </div>
                    : 
                <div title='Switch to Light Mode'>
                    <DarkModeRounded 
                        className='text-slate-300'
                    />
                </div>
            }
        </button>
    )
}

export default DarkModeButton;
