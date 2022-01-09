import React from "react"
import { CustomIconProps } from "."

export interface IBurgerMenuRounded extends CustomIconProps {
    color?: string;
}

export const BurgerMenuRounded: React.FC<IBurgerMenuRounded> = ({
    color="#000", 
    ...props
}) => {
  return (
        <svg
            width={props?.size || '24px'}
            height={props?.size || '24px'}
            fill="currentColor"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                // stroke="#115E59"
                strokeWidth={2}
                strokeLinecap="round"
                d="M3 4h14M3 12h18M3 20h8"
            />
        </svg>
    )   
}