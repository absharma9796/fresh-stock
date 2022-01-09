import React from "react"
import { CustomIconProps } from "."

export interface IDarkModeRounded extends CustomIconProps {
    color?: string;
}

export const DarkModeRounded: React.FC<IDarkModeRounded> = ({
    color="#000", 
    ...props
}) => {
  return (
    <svg
        width={props?.size || '24px'}
        height={props?.size || '24px'}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <path
        d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 009 9c4.63 0 8.45-3.5 8.95-8 .09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0111.1 7.5c0-1.06.31-2.06.84-2.89.45-.67-.04-1.63-.93-1.56z"
      />
    </svg>
  )
}