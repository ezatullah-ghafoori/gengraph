import { SidebarBtnType } from '@/types/SidebarBtns.types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const SidebarItem = ({ title, icon, link, className }: SidebarBtnType) => {
    return (
        <Link className={"flex group relative items-center" + className} href={link}>
            <FontAwesomeIcon icon={icon} className="w-[20px] mx-auto" />
            <span className="absolute -left-[1000%] group-hover:left-10 transition-all duration-300 whitespace-nowrap bg-slate-700 text-white text-sm px-4 py-2 z-[99] rounded-md rounded-s-none pointer-events-none inline-flex">
                {title}
            </span>

        </Link>


    )
}

export default SidebarItem