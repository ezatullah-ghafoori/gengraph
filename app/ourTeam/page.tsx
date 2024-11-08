'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import eGhafoori from '@/assets/img/e-ghafoori1.png'
import qGhafoori from '@/assets/img/q-ghafoori.jpg'
import basirAgha from '@/assets/img/basirAgha.jpg'
import QRCode from 'qrcode'
import { toast } from 'react-toastify'
import Link from 'next/link'

type Props = {}

const TeamMemberCard = ({ src, fName, lName, jobTitle, whatsapp }: { src: StaticImageData, fName: string, lName: string, jobTitle: string, whatsapp: string }) => {
  const [qrSrc, setSrc] = useState('');

  useEffect(() => {
    const whatsappURL = `https://wa.me/${whatsapp}`;
    QRCode.toDataURL(whatsappURL, { width: 300 }, (err, url) => {
      if (err) toast("Something Went wrong please reload", { type: "error" });
      setSrc(url)
    })
  })

  return (<div className='relative flex flex-col group items-center justify-center w-[300px] shadow-lg rounded-md mt-10 overflow-hidden h-[130px] transition-[500ms] hover:h-[300px]'>
    <div style={{ backgroundImage: `url(${src.src})` }} className='absolute bg-no-repeat flex flex-col bg-[length:300px] bg-center items-center justify-center w-full  h-[400px] overflow-hidden rounded-lg bg-white/30 backdrop-blur-md'>
      <div className='absolute w-full h-full bg-slate-800/30 backdrop-blur-sm'></div>
      <div className='mt-10 group-hover:-mt-10 rounded-full shadow-xl z-10 w-[110px] h-[110px] bg-white flex items-center justify-center'>
        <div className={`w-[100px] h-[100px] flex items-center justify-center z-10 rounded-full overflow-hidden ${fName == "Ezatullah" && "pt-4"} ${fName == "Qudratullah" && "pt-10"}`}>
          <Image src={src} alt={fName + " " + lName} />
        </div>
      </div>
      <div className='py-4 w-full z-10 px-6 h-[50px] group-hover:h-[100px] transition-[400ms]'>
        <h1 className='w-full -translate-y-[50px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[500ms] delay-300 text-white font-bold text-center text-xl'>{fName} ({lName})</h1>
        <hr className='-translate-x-[200%] border-white group-hover:translate-x-0 transition-[500s] delay-[300ms]' />
        <h1 className='-translate-x-[200%] group-hover:translate-x-0 transition-[500s] delay-[500ms] text-white font-bold'>{jobTitle}</h1>
        <div className='w-full flex items-center justify-center translate-y-[200px] group-hover:translate-y-0 transition-[200ms] delay-1000'>
          <Image src={qrSrc || ""} className='border-[1px] p-2' alt='QR Code' width={90} height={90} />
        </div>
      </div>
    </div>
  </div>)
}

const page = (props: Props) => {
  return (
    <div className='flex flex-col items-center h-[180vh] w-[90vw] ms-10 mt-10'>
      <div className='flex flex-col ma-auto w-[60%]'>
        <h1 className='text-center font-bold text-slate-800 text-2xl'>Meet the Team at GhafooriSoft</h1>
        <p>
          At GhafooriSoft, we’re a dedicated team of software experts driven by innovation and a commitment to delivering impactful digital solutions. With three years of collective experience in the software development industry, our team combines deep technical expertise with a passion for user-focused design and performance.
        </p>
        <h1 className='text-slate-800 font-bold text-center text-2xl my-2'>Our Recent Work</h1>
        <div className='flex items-center justify-center gap-3'>
          <Link className='border-4 py-2 px-4 w-36 rounded-md transition-all bg-slate-400 text-white font-bold hover:bg-slate-500 text-center' href={'https://estokk.com'} target='_blank'>Estokk.com</Link>
          <Link className='border-4 py-2 px-4 w-36 rounded-md transition-all bg-slate-400 text-white font-bold hover:bg-slate-500 text-center' href={'https://fred.immo'} target='_blank'>FRED.immo</Link>
        </div>
        <br />
        <Link className='border-4 py-2 px-4 w-36 rounded-md border-slate-600 transition-all bg-slate-800 text-white font-bold hover:bg-slate-700 text-center mx-auto' href={'https://ezatullah-ghafoori.vercel.app/#contact'} target='_blank'>Hire us</Link>
      </div>
      <div className='flex'>
        <TeamMemberCard whatsapp='93708214543' src={eGhafoori} fName={'Ezatullah'} lName={'Ghafoori'} jobTitle={'Lead Software Architect & CEO'} />
      </div>
      <div className='flex gap-10'>
        <TeamMemberCard whatsapp='93745706260' src={basirAgha} fName={'Abdul Basir'} lName={'Agha'} jobTitle={'UI/UX Engineer'} />
        <TeamMemberCard whatsapp='93702870805' src={qGhafoori} fName={'Qudratullah'} lName={'Ghafoori'} jobTitle={'Front-end Developer'} />
      </div>
    </div>
  )
}

export default page