import React, { ReactNode } from "react"

export type Props = {
    yes: string
    no: string
    /**
     * ###ldalskd `1234` asd
     *
     * @type {ReactNode}
     * @memberof Props
     */
    children: ReactNode
    /**
     * bla [yes](#yes)
     *
     * @type {number}
     * @memberof Props
     */
    yolo: number
    /**
     * etwas
     *
     * @type {Array<string>}
     * @memberof Props
     */
    geil: Array<string>
}

export default function Anything({  }: Props) {
    return <div>content</div>
}
