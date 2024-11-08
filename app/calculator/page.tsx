import React from 'react'

type Props = {}

const Calculator = (props: Props) => {
    return (
        <div className='w-[95.3vw] flex items-center justify-center flex-col'>
            <h1 className='mt-20 font-bold text-2xl text-slate-700 '>gMath Standard Calculator</h1>
            <iframe
                src="/SimpleJS-Calculator-main/index.html"
                title="Decimal to Binary Converter"
                width="100%"
                height="400px"
                style={{ border: "none" }}
            >

            </iframe>
        </div>
    )
}

export default Calculator