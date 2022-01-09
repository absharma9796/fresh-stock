import React from "react"
import { CustomIconProps } from "."

export interface IRemoveRounded extends CustomIconProps {
    color?: string;
}

export const RemoveRounded: React.FC<IRemoveRounded> = ({
    color="#000", 
    ...props
}) => {
  return (
    <svg
        width={props?.size || '24px'}
        height={props?.size || '24px'}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <path
        d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1Z"
      />
    </svg>
  )
}