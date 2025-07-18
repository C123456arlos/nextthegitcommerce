'use client'

import { ComponentProps } from "react"
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
type FormSubmitButtonProps = {
    children: React.ReactNode,
    className?: string
} & ComponentProps<'button'>

export default function FormSubmitButton(
    { children, className, ...props }: FormSubmitButtonProps
) {
    const { pending } = useFormStatus()
    return (
        <button {...props} disabled={pending} className={`btn btn-primary ${className}`} type="submit">
            {pending && <span className="loading loading-spinner"></span>}{children}</button>
    )
}


