import React, { ReactNode } from "react"

export interface Props {
    color: string
    children: ReactNode
    type: string
}

export default function Input({ children }: Props) {
    return <input>{children}</input>
}
