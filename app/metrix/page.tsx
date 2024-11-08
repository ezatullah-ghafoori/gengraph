'use client'
import Metrix from '@/components/metrixComponent/Metrix'
import { MetrixOperations } from '@/constants/MetrixOpeartions'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { create, all } from 'mathjs'
import DisplayMetrix from '@/components/metrixComponent/DisplayMetrix'

const math = create(all);

type Props = {}

const page = (props: Props) => {
    const [metrix, setMetrix] = useState<number[][]>([
        [0]
    ])
    const [metrixB, setMetrixB] = useState<number[][]>([
        [0]
    ])
    const [resultMetrix, setResultMetrix] = useState<number[][]>([
        [0]
    ])

    const [numberResult, setNumberResult] = useState<number>(0)

    const [needAnotherMetrix, setNeedAnotherMetrix] = useState<boolean>(false)
    const [displayResult, setDisplayResult] = useState(false);
    const [showNumberResult, setShowNumberResult] = useState(false);
    const [operationalSign, setOperationalSign] = useState<string>('')

    const handleOperationClick = (tilte: string, symbol: string) => {
        if (symbol == "+" || symbol == "-" || symbol == "/" || symbol == "*") {
            setNeedAnotherMetrix(true);
            setOperationalSign(symbol)
            setShowNumberResult(false);
            setDisplayResult(false)
        } else if (symbol == '-1') {
            if (!(metrix.length == metrix[0].length)) {
                toast("Only Square metrix can be inverted!", { type: "error" })
            } else {
                if (math.det(metrix) == 0) {
                    toast("Cannot calculate inverse, determinant is zero", { type: "info" })
                } else {
                    setResultMetrix(math.inv(metrix));
                    setDisplayResult(true)
                }
            }
            setShowNumberResult(true)
        } else if (symbol == '|A|') {
            if (!(metrix.length == metrix[0].length)) {
                toast("Cannot find the  determinant of unsquare matirx!", { type: "error" })
            } else {
                setResultMetrix([[0]]);
                setDisplayResult(false)
                setNumberResult(math.det(metrix))
                setShowNumberResult(true)
            }
        }
    }

    const performCalculation = () => {
        switch (operationalSign) {
            case "+":
                setResultMetrix(math.add(metrix, metrixB))
                setDisplayResult(true);
                setShowNumberResult(false);
                setNeedAnotherMetrix(false);
                setMetrixB([[0]])
                break;
            case "-":
                setResultMetrix(math.subtract(metrix, metrixB))
                setDisplayResult(true);
                setShowNumberResult(false);
                setNeedAnotherMetrix(false);
                setMetrixB([[0]])
                break;
            case "*":
                if (metrix[0].length == metrixB.length) {
                    setResultMetrix(math.multiply(metrix, metrixB))
                    setDisplayResult(true);
                    setShowNumberResult(false);
                    setNeedAnotherMetrix(false);
                    setMetrixB([[0]])
                } else {
                    toast(`Dimension mismatch in multiplication. Matrix A columns (${metrix.length}) must match Matrix B rows (${metrixB[0].length})`, { type: "error" })
                }
                break;
            case "/":
                try {
                    setResultMetrix(math.dotDivide(metrix, metrixB))
                    setDisplayResult(true);
                    setShowNumberResult(false);
                    setNeedAnotherMetrix(false);
                    setMetrixB([[0]])

                } catch {
                    const shapeA = `${metrix.length}x${metrix[0].length}`;
                    const shapeB = `${metrixB.length}x${metrixB[0].length}`
                    toast(`Error: The matrices you are trying to divide have incompatible dimensions. Matrix A is ${shapeA} while Matrix B is ${shapeB}. Please ensure both matrices have the same dimensions.`)
                }
                break;
        }
    }

    return (
        <div className='flex  flex-col  w-[95.28vw] '>
            <Metrix title='A' metrix={metrix} setMetrix={setMetrix} />
            <div className=' flex flex-col gap-4  w-full items-center justify-center'>
                <h1>Please Choose one of the operation bellow</h1>
                <div className='flex gap-4'>
                    {MetrixOperations.map(operation => <>
                        <div className={`flex-1 transition-[500ms] w-[8rem] h-[4rem] border-2 px-4 py-2 items-center justify-center flex flex-col rounded hover:bg-slate-200 ${operationalSign == operation.symbol && "bg-slate-800 text-white border-none hover:bg-slate-700"}`} onClick={() => handleOperationClick(operation.name, operation.symbol)}>
                            <h1>{operation.name}</h1>
                            <h1>{operation.symbol}</h1>
                        </div>
                    </>)}
                </div>
            </div>
            {
                needAnotherMetrix && <>
                    <Metrix title='B' metrix={metrixB} setMetrix={setMetrixB} />
                    <button onClick={performCalculation} className='py-2 px-4 bg-slate-800 w-1/4 mx-auto text-white font-bold rounded-lg mt-4 hover:bg-slate-700 transition-[300ms]'>Calculate</button>
                </>
            }
            {
                displayResult && <>
                    <DisplayMetrix title='Result' metrix={resultMetrix} />
                </>
            }
            {
                showNumberResult && <div className='flex w-full items-center justify-center mt-20'>
                    <h1 className='font-bold text-2xl'>Result: {numberResult}</h1>
                </div>
            }

        </div>
    )
}

export default page