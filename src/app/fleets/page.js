import React from 'react';
import Image from "next/image";


export default function Fleets() {
  return (
  
  <div className="py-24 bg-gray-200">
    <div className='container'>
        <h4 className="uppercase font-semibold text-center mb-1 text-red-700 text-xl">{`Bienvenido a catalogo HPixel`}</h4>
        <h2 className='oswald text-center font-semibold text-1xl mt-5'>
            Consulta tus Precios de Rares aqui
        </h2>
      <div className='grid grid-cols-6 gap-5 mt-10'>
          <div className="[bg-[#f4f5f8] shadow-md">
            <div className='relative'>
             <Image src="/images/Drako_Cristalino.png" width={260} height={194} alt='background' className='fleet--clip'/>
             </div>
             </div>
          <div className='bg-green-400 '>Fleet</div>
          <div className='bg-green-400'>Fleet</div>
          <div className='bg-green-400'>Fleet</div>
          <div className='bg-green-400'>Fleet</div>
    </div>
   </div>
  </div>
);
}