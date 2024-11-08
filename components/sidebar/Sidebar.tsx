import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Sidebar = ({ children }: Props) => {
    return (
        <div className='md:flex flex-col bg-slate-700 fixed text-white gap-4 w-[4rem] items-center h-[100vh] justify-start z-[999] hidden'>
            <Link href={'/'} className='text-white text-xl p-4 flex flex-col items-center justify-center'>g<span className='text-red-600 font-bold'>Math</span></Link>
            <div className=' flex flex-col gap-10 items-center justify-center h-full'>
                {
                    children
                }
            </div>
        </div>
    )
}

export default Sidebar