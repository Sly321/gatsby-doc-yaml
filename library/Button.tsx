import React, { ReactNode } from "react"

export interface Props {
    color: string
    children: ReactNode
    type: string
}

export default function Button({ children }: Props) {
    return <button>{children}</button>
}
