import React, { ReactNode } from "react"

export interface Props {
    no: string
    children: ReactNode
    yes: string
}

export default function Anything({  }: Props) {
    return <div>content</div>
}
