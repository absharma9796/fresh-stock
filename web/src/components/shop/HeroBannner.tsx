import { Skeleton } from '@components/reusable/Skeleton';
import React, { useEffect, useState } from 'react'

const HeroBannner = () => {
    
    const [username, setusername] = useState(null);

    useEffect(() => {
        const getUserName = async () => {
            if("fs-name" in localStorage) {
                const storedName = localStorage.getItem("fs-name");
                setTimeout(() => setusername(storedName || "Shopper"), 1000);
                return;
            }
            setusername(prev => prev === null ? undefined : null);
        }
        getUserName();
        return () => {}
    }, [username]);

    return (
        <div className='flex w-full'>
            {
                !username ?
                <div className="flex flex-col px-5 py-10">
                    <Skeleton 
                        width={300}
                        height={40}
                        className='my-5'
                    />
                </div> 
                    :
                <div className="flex flex-col px-5 py-10">
                    <h2 className='my-5 text-3xl sm:text-4xl font-semibold text-slate-700 dark:text-slate-300'>
                        Welcome 
                        <span
                            className='mx-2 text-l-primary dark:text-d-primary'
                        >
                            {username}
                        </span>
                    </h2>
                    <div className='text-lg sm:text-2xl font-semibold text-slate-600 dark:text-slate-400'>
                        Here's your freshly curated apparel feed.<br />
                        <span>Happy Shopping!</span>
                    </div>
                </div>   
            }
        </div>
    )
}

export default HeroBannner
