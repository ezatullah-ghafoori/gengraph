import { MetrixOperations } from '@/constants/MetrixOpeartions';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import DisplayMetrix from './DisplayMetrix';


const Metrix = ({ metrix, setMetrix, title }: { title: string, metrix: number[][], setMetrix: React.Dispatch<React.SetStateAction<number[][]>> }) => {
    const [isSquare, setIsSquare] = useState(false);
    const handleMetrixChange = (colIndex: number, rowIndex: number, value: string) => {
        console.log('I am Chaning...')
        const newMetrix = [...metrix];
        newMetrix[rowIndex][colIndex] = parseFloat(value) || 0;
        setMetrix(newMetrix)
    }

    const addCol = () => {
        const newMetrix = [...metrix];
        newMetrix.forEach((row, index) => {
            row.push(0);
        })

        setMetrix(newMetrix)
    }
    const DelCol = () => {
        const newMetrix = [...metrix];
        newMetrix.forEach((row, index) => {
            if (row.length == 1) {
                row[0] = 0
                return
            }
            row.pop();
        })

        setMetrix(newMetrix)
    }
    const addRow = () => {
        const newMetrix = [...metrix];
        const newArraItem = new Array(newMetrix[0].length).fill(0)
        newMetrix.push(newArraItem);
        setMetrix(newMetrix)
    }
    const DelRow = () => {
        const newMetrix = [...metrix];
        if (newMetrix.length == 1) {
            newMetrix[0] = [0]
            return
        }
        newMetrix.pop();
        setMetrix(newMetrix)
    }
    const addColAndRow = () => {
        addCol();
        addRow();
    }
    const delColAndRow = () => {
        DelCol();
        DelRow();
    }

    const onSquareChanged = (e: any) => {
        if (metrix.length == metrix[0].length) {
            setIsSquare(e.target.checked)
        } else {
            toast("Connot Convert Unsquare metrix to a sqaure metrix!", { type: "error", closeButton: true })
            toast("Please Make metrix square by adding or Removing rows and cols!", { type: "info", delay: 3000, closeButton: true })
        }
    }

    const resetMetrix = () => {
        const newMetrix = [[0]]
        setMetrix(newMetrix)
        toast("Metrix Reseted!")
        return
    }

    return (
        <div className='flex items-center justify-around gap-10'>
            <div className='mx-10 my-5 flex flex-col gap-4'>
                <h1 className='uppercase text-center'>Option Pad</h1>
                <div className='flex items-center justify-center gap-5'>
                    <div className='flex flex-col gap-2'>
                        <div className='border-2  px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-slate-100'>
                            <input type="checkbox" checked={isSquare} onChange={onSquareChanged} id='square' />
                            <label htmlFor="square">Is Square</label>
                        </div>
                        <input className='bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-600' type="button" onClick={resetMetrix} id='square' value={"Reset Metrix"} />

                    </div>


                    <div className='flex flex-col gap-3 items-center justify-center'>
                        {isSquare ? <>

                            <input className='bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-600' type="button" onClick={addColAndRow} id='square' value={"Add col & row"} />
                            <input className='bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-600' type="button" onClick={delColAndRow} id='square' value={"Del col & row"} />
                        </> : <>
                            <div className='flex gap-4'>
                                <input className='bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-600' type="button" onClick={addCol} id='square' value={"Add col"} />
                                <input className='bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-600' type="button" onClick={addRow} id='square' value={"Add row"} />
                            </div>
                            <div className='flex gap-4'>
                                <input className='bg-slate-700 text-white px-5 py-2 rounded-md hover:bg-slate-600' type="button" onClick={DelCol} id='square' value={"Del col"} />
                                <input className='bg-slate-700 text-white px-5 py-2 rounded-md hover:bg-slate-600' type="button" onClick={DelRow} id='square' value={"Del row"} />
                            </div>
                        </>}
                    </div>
                </div>
            </div>
            <DisplayMetrix title={title} metrix={metrix} handleMetrixChange={handleMetrixChange} />
        </div>
    )
}

export default Metrix