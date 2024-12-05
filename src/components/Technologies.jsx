import React from 'react'
import { FaGitAlt, FaHtml5, FaNodeJs } from 'react-icons/fa6'
import { FiFigma } from 'react-icons/fi'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io5'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiMysql, SiPostman, SiPrisma } from 'react-icons/si'

function Technologies() {
  return (
    <div className='pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className='p-4'>
            <FaHtml5 className='text-7xl text-orange-500'/>
        </div>
        <div className='p-4'>
            <IoLogoCss3 className='text-7xl text-blue-700'/>
        </div>
        <div className='p-4'>
            <RiTailwindCssFill className='text-7xl text-cyan-400'/>
        </div>
        <div className='p-4'>
            <IoLogoJavascript className='text-7xl text-yellow-500'/>
        </div>
        <div className='p-4'>
            <FaNodeJs className='text-7xl text-green-950'/>
        </div>
        <div className='p-4'>
            <SiExpress className='text-7xl'/>
        </div>
        <div className='p-4'>
            <SiMysql className='text-7xl'/>
        </div>
        <div className='p-4'>
            <SiPrisma className='text-7xl'/>
        </div>
        <div className='p-4'>
            <FaGitAlt className='text-7xl text-orange-800'/>
        </div>
        <div className='p-4'>
            <SiPostman className='text-7xl text-orange-800'/>
        </div>
        <div className='p-4'>
            <FiFigma className='text-7xl '/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
