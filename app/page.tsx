import { SidebarBtn } from '@/constants/SidebarBtn'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='flex items-center justify-center text-slate-700 flex-1 flex-col w-[95vw] h-full'>
            <h1 className='text-[70px]'>g<span className='text-red-600'>Math</span></h1>
            <p>Speed up your calculation with our excellent tools.</p>
            <br />
            <hr className='w-1/2 pt-10' />
            <h1 className='pb-2 text-2xl'>Our Tools</h1>
            <hr className='w-1/4 pt-10' />
            <div className='flex items-center justify-center gap-5'>
                {
                    SidebarBtn.map(btn => {
                        if (btn.title == "Home") return <></>
                        return <Link href={btn.link} className='shadow-md rounded-md pt-10 flex-1 h-[150px] w-[200px] flex flex-col px-10 group'>
                            <h1 className='text-center'>{btn.title}</h1>
                            <div className='flex items-center justify-end mt-5 mb-2 flex-1 w-full opacity-0 group-hover:opacity-100 transition-[200ms] text-blue-800'>
                                <FontAwesomeIcon icon={faArrowRight} className='text-sm w-[20px] self-end' />
                            </div>
                        </Link>
                    })
                }
            </div>
            <h1 className='mt-20'>Product of <span className='text-2xl text-slate-700'>GhafooriSoft</span></h1>
        </div>
    )
}

export default page