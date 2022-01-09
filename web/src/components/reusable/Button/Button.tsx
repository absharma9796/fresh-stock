import ButtonStyles from './Button.module.sass';
import React, { ButtonHTMLAttributes } from 'react';
import Spinner from '../Spinner/Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    colorVariant?: "primary" | "primaryDark" | "primaryLight";
    loading?: boolean;
    sizeVariant?: 'small' | 'regular' | 'medium' | 'large';
    spinnerSize?: string;
    variant?: 'filled' | 'outlined' | 'none',
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    loading=false,
    sizeVariant="regular",
    spinnerSize,
    startIcon,
    endIcon,
    colorVariant="primary",
    variant="filled",
    ...props
}) => {

    const bgColorVariantMap = {
        "filled": {
            "primary": "bg-l-primary hover:bg-primary-600 dark:bg-d-primary dark:hover:bg-primary-600",
            "primaryDark": "bg-l-primaryDark hover:bg-primary-700 dark:bg-d-primaryDark dark:hover:bg-primary-700",
        },
        "none": {
            "primary": "bg-tranparent hover:bg-teal-50 dark:bg-transparent dark:hover:bg-teal-50/30",
            "primaryDark": "bg-l-primaryDark hover:bg-primary-700 dark:bg-d-primaryDark dark:hover:bg-primary-700",
        }
    }

    const textColorVariantMap = {
        "filled": {
            "primary": "text-white",
            "primaryDark": "text-white",
            "primaryLight": "text-white"
        },
        "outlined": {
            "primary": "text-l-primary dark:text-d-primary",
            "primaryDark": "text-l-primaryDark dark:text-d-primaryDark",
            "primaryLight": "text-l-primaryLight dark:text-d-primaryLight"
        },
        "none": {
            "primary": "text-l-primary dark:text-d-primary",
            "primaryDark": "text-l-primaryDark dark:text-d-primaryDark",
            "primaryLight": "text-l-primaryLight dark:text-d-primaryLight"
        }
    }

    const buttonSizeMap = {
        'small': ButtonStyles['button-small'],
        'regular': ButtonStyles['button-regular'],
        'medium': ButtonStyles['button-medium'],
        'large': ButtonStyles['button-large']
    }

    return (
        <button
            className={`flex flex-shrink-0 flex-nowrap ${ButtonStyles.button} ${buttonSizeMap[sizeVariant]} ${bgColorVariantMap[variant][colorVariant]} ${textColorVariantMap[variant][colorVariant]} ${loading || props?.disabled ? 'cursor-not-allowed' : ''} rounded-full`}
            {...props}
        >
            {!!loading && 
                <Spinner 
                    fontSize={spinnerSize || "inherit"}
                    className={`${textColorVariantMap[variant][colorVariant]}`}
                />
            }
            {
                startIcon && startIcon
            }
            {children}
            {
                endIcon && endIcon
            }
        </button>
    )
}
