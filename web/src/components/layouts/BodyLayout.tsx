import React, { FC } from 'react';
import styles from "@styles/Home.module.css"


const BodyLayout: FC = (props) => {

    return (
        <div 
            id="scrollable-body-layout"
            className={`flex flex-col items-center relative bg-white dark:bg-d-background w-screen max-h-full h-full overflow-auto scroll-smooth`
        }
            style={{
                height: 'calc(100vh - 64px)',
            }}
        >
            <div className="flex w-full max-w-7xl h-full px-2 sm:px-10">
                {props.children}
            </div>
        </div>
    )
}

export default BodyLayout;