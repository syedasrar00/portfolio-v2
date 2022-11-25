import React from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react';

export default function Navbar() {
  const [slected , setSelected] = useState("");
  return (
    <div className="flex justify-center">
    <div className='flex bg-[rgb(0,0,0,0.3)] rounded-lg w-80 gap-5 fixed bottom-2 z-30 text-3xl px-1 py-2'>
      <a href="#" className={slected==="#"?"rounded-full bg-slate-900 text-gray-400 px-2 py-2":"px-2 py-2 hover:bg-slate-600 hover:rounded-full duration-200"} onClick={()=>setSelected("#")}><AiOutlineHome /></a>
      <a href="#about" className={slected==="#about"?"rounded-full bg-slate-900 text-gray-400 px-2 py-2":"px-2 py-2 hover:bg-slate-600 hover:rounded-full duration-200"} onClick={()=>setSelected("#about")}><AiOutlineUser /></a>
      <a href="#experience" className={slected==="#experience"?"rounded-full bg-slate-900 text-gray-400 px-2 py-2":"px-2 py-2 hover:bg-slate-600 hover:rounded-full duration-200"} onClick={()=>setSelected("#experience")}><BiBook /></a>
      <a href="#services" className={slected==="#services"?"rounded-full bg-slate-900 text-gray-400 px-2 py-2":"px-2 py-2 hover:bg-slate-600 hover:rounded-full duration-200"} onClick={()=>setSelected("#services")}><RiServiceLine /></a>
      <a href="#contact" className={slected==="#contact"?"rounded-full bg-slate-900 text-gray-400 px-2 py-2":"px-2 py-2 hover:bg-slate-600 hover:rounded-full duration-200"} onClick={()=>setSelected("#contact")}><BiMessageSquareDetail /></a>
    </div>
    </div>
  ) 
}
