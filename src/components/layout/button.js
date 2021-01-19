import React from 'react'
import './button.css'

const STYLES = [
    "btn--primary",
    "btn-outline"
]

const SIZES = [
    'btn--medium',
    'btn--large'

]

export const button = ({
    children,
    type,
    onClick,
    buttonStyles,
    buttonSizes
})=>{
    const checkButtonStyles = STYLES.includes(buttonStyles)?buttonStyles: STYLES[0]
    const chekcButtonSize = SIZES.includes(buttonSizes)? buttonSizes :SIZES[0]

    return(
        <button className={`btn${checkButtonStyles} ${chekcButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}