import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import React from "react"


export type SidebarBtnType = {
    title: String
    icon: IconDefinition
    link: string
    className?: string
}

export type MetrixOperationType = {
    name: string
    symbol: string
}