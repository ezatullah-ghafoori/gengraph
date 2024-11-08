import React from 'react'

type Props = {}

const DisplayMetrix = ({ metrix, handleMetrixChange, title }: {title: string,  metrix: number[][], handleMetrixChange?: (colIndex: number, rowIndex: number, value: string) => void }) => {
    return (
        <div className='flex  items-center justify-center my-10 pt-5'>
            <h1 className='text-2xl'>{title} = </h1>
            <div className='flex items-center justify-center gap-2'>
                <h1 className='text-[80px] font-extralight'>(</h1>
                <div className='flex flex-col gap-2'>{metrix.map((row, rowIndex) => <div className='flex items-center justify-center gap-2'>
                    {row.map((col, colIndex) => <>
                        <input type="text" onChange={e => handleMetrixChange && handleMetrixChange(colIndex, rowIndex, e.target.value)} value={col} className='border-1 focus:outline-none focus:bg-gray-200 rounded-md w-[40px] flex items-center justify-center text-center' />
                    </>)}
                </div>)}</div>
                <h1 className='text-[80px] font-extralight'>) <span className='text-[10px]'>{metrix.length} X {metrix[0].length}</span></h1>
            </div>
        </div>
    )
}

export default DisplayMetrix