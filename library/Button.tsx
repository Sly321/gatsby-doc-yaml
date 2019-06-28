import React, { ReactNode } from "react"

export interface Props {
    /**
     * Perfectly Documented
     *
     * @type {string}
     * @memberof Props
     */
    color: string

    /**
     * Bad Documented
     * @memberof Props
     */
    children: ReactNode

    // Nearly not Documented
    type: string

    notDocument: number | any
}

export default function Button({ children }: Props) {
    return <button>{children}</button>
}
