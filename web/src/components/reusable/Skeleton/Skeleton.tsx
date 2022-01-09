import React, { FC, HTMLAttributes } from 'react';

export interface ISkeleton extends HTMLAttributes<HTMLDivElement> {
    width?: string | number,
    height?: string | number,
    shape?: 'circle' | 'rect',
    backgroundcolor?: string
}

export const Skeleton: FC<ISkeleton> = ({
    className = '',
    backgroundcolor = 'bg-slate-100 dark:bg-slate-600',
    width = 100,
    height = 50,
    shape = 'rect',
    children,
    ...props
}) => {

    const _shape = shape === 'circle' ? 'rounded-full' : 'rounded-md';

    return (
        <div 
            className={`${className} ${_shape} ${backgroundcolor} animate-pulse`}
            style={{
                height: height,
                width: width
            }}
            {...props}
        >
            {children}
        </div>
    )
}
