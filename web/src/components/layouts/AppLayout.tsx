import Header from '@components/header/Header';
import React from 'react';
import BodyLayout from './BodyLayout';

const AppLayout: React.FC = ({
    children,
    ...props
}) => {
    return (
        <div className='flex flex-col items-center h-screen w-screen dark:bg-d-background overflow-hidden'>
            <Header />
            <BodyLayout>
                {children}
            </BodyLayout>
        </div>
    )
}

export default AppLayout
