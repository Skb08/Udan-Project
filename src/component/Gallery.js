import React from 'react'
import Img1 from '../Images/Img1.svg'
import Img2 from '../Images/techkriti.png'
import Img3 from '../Images/aerorix.png'
import Img4 from '../Images/daily avaition.png'

export const Gallery = () => {
  return (
    <div className=''>
      <section class="grid grid-cols-2 gap-10 p-4  mt-[5%]">
        
        <div class="mx-auto group  lg:max-h-full lg:max-w-[45%] max-h-[68%] shadow-2xl max-w-md pb-4 rounded-b-2xl transform duration-500 hover:-translate-y-2 ">
          <div class="content bg-cover bg-center h-64 rounded-2xl max-h-[84%] lg:max-h-full w-full" >
            <img className='flex items-end w-full h-full bg-black bg-opacity-20 text-white text-sm font-bold  p-4 rounded-2xl object-contain' src={Img1} alt=""  />
          </div>
          <div className='bg-white h-[18%] w-full rounded-xl text-center text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] 2xl:text-[1.75rem] font-normal pt-[2%] font-outfit'>
            <h1>Technoxian</h1>
          </div>
        </div>
        <div class="mx-auto group lg:max-h-full lg:max-w-[45%] max-h-[68%] shadow-2xl max-w-md pb-4 rounded-b-2xl transform duration-500 hover:-translate-y-2 ">
          <div class="content bg-cover bg-center h-64 rounded-2xl max-h-[84%] lg:max-h-full w-full" >
            <img className='flex items-end w-full h-full bg-black bg-opacity-20 text-white text-sm font-bold  p-4 rounded-2xl object-contain' src={Img2} alt=""  />
          </div>
          <div className='bg-white h-[18%] w-full rounded-xl text-center text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] 2xl:text-[1.75rem]  pt-[2%] font-outfit'>
            <h1>Techkriti'23</h1>
          </div>
        </div>
        <div class="mx-auto group lg:max-h-full lg:max-w-[45%] max-h-[68%] shadow-2xl max-w-md pb-4 rounded-b-2xl transform duration-500 hover:-translate-y-2 ">
          <div class="content bg-cover bg-center h-64 rounded-2xl max-h-[84%] lg:max-h-full w-full" >
            <img className='flex items-end w-full h-full bg-black bg-opacity-20 text-white text-sm font-bold  p-4 rounded-2xl object-contain' src={Img3} alt=""  />
            
          </div>
          <div className='bg-white h-[18%] w-full rounded-xl text-center text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] 2xl:text-[1.75rem]  pt-[2%] font-outfit'>
            <h1>Aeroprix'23</h1>
          </div>
        </div>
        <div class="mx-auto group lg:max-h-full lg:max-w-[45%] max-h-[68%] shadow-2xl max-w-md pb-4 rounded-b-2xl transform duration-500 hover:-translate-y-2 ">
          <div class="content bg-cover bg-center h-64 rounded-2xl max-h-[84%] lg:max-h-full w-full" >
            <img className='flex items-end w-full h-full bg-black bg-opacity-20 text-white text-sm font-bold  p-4 rounded-2xl object-contain' src={Img4} alt=""  />
            
          </div>
          <div className='bg-white h-[18%] w-full rounded-xl text-center text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] 2xl:text-[1.75rem] pt-[2%] font-outfit'>
            <h1>Daily Aviation</h1>
          </div>
        </div>
      </section>
    </div>
  )
}
