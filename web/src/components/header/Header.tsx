import BurgerMenuButton from '@components/reusable/BurgerMenuButton';
import CartButton from '@components/reusable/CartButton';
import DarkModeButton from '@components/reusable/DarkModeButton';
import { BurgerMenuRounded, CartEmptyRounded } from '@components/reusable/icons';
import AppLogo from '@components/reusable/icons/AppLogo';
import { useReduxSelector } from '@redux/hooks';
import { cartList__selector } from '@redux/selectors';
import React, { useState } from 'react';

const Header = () => {

    const [menuOpen, setmenuOpen] = useState(false);

    return (
        <header className='flex justify-center items-center h-16 w-full bg-l-background dark:bg-slate-700'>
            <div className="relative z-50 flex items-center justify-between h-full w-full max-w-7xl px-5">
                <div className="block sm:hidden">
                    <BurgerMenuButton 
                        open={menuOpen}
                        handleClick={() => setmenuOpen(prev => !prev)}
                    />
                </div>
                <AppLogo />
                <div className="flex">
                    <div className="hidden sm:flex mx-4">
                        <DarkModeButton />
                    </div>
                    <div className="mx-4">
                        <CartButton />
                    </div>
                </div>
                {
                    menuOpen &&
                    <div className="p-4 flex flex-col sm:hidden w-full absolute inset-x-0 -bottom-px transform translate-y-full bg-slate-50 dark:bg-slate-700 shadow-md">
                        <div className="flex"></div>
                        <div className="flex"></div>
                        <div className="flex items-center">
                            <span className="flex items-center mr-2 h-full text-base font-medium text-slate-800 dark:text-white">Theme: </span>
                            <DarkModeButton />
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header;
