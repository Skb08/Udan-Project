import React from 'react'
import Img1 from '../Images/Img1.svg'
import Img2 from '../Images/Img2.svg'
import Img3 from '../Images/Img3.svg'
import Img4 from '../Images/Img4.svg'
import Img5 from '../Images/Img5.svg'
import Img6 from '../Images/Img6.svg'
import Img7 from '../Images/Img7.svg'


export const ExecutiveBody = () => {
    return (
        <div className='w-full container flex justify-evenly '>
            <div className="p-0 grid grid-cols-2 items-center lg:gap-x-[15%] lg:w-[75%]">

                <div className="ml-[63%] mr-[-63%] flex flex-col  md:flex-row  p-5 transform duration-200 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
                    <div className="relative w-full overflow-hidden">
                        <img className="object-fit  w-full rounded-t-lg h-full p-4 " src={Img1} alt="" />
                    </div>
                    <div className='md:p-4 text-center md:text-left  md:w-[80%]'>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Pratyush Nayak</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">President</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">3rd year, Metallurgical & Materials Engg.</h5>
                    </div>
                </div>
                <br />

                <div className="flex flex-col   md:flex-row  p-5 transform duration-200 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
                    <div className="relative w-full overflow-hidden">
                        <img className="object-fit max-h-[10rem] w-full rounded-t-lg h-full p-4" src={Img2} alt="" />
                    </div>
                    <div className='p-1 md:p-4 text-center md:text-left md:w-[80%]'>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Bikram Jena</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Vice President</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">3rd year, Industrial Design</h5>
                    </div>
                </div>
                <div className="flex flex-col   md:flex-row  p-5 transform duration-200 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
                    <div className="relative w-full overflow-hidden">
                        <img className="object-fit max-h-[10rem] w-full rounded-t-lg h-full p-4" src={Img3} alt="" />
                    </div>
                    <div className='p-1 md:p-4 text-center md:text-left md:w-[80%]'>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Dibyarchana Nayak</h5>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">PR &Sponsership Head</h5>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">3rd year, Ceramic Engg.</h5>
                    </div>
                </div>

                <div className="flex flex-col   md:flex-row  p-5 transform duration-200 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
                    <div className="relative w-full overflow-hidden">
                        <img className="object-fit max-h-[10rem] w-full rounded-t-lg h-full p-4" src={Img4} alt="" />
                    </div>
                    <div className='p-1 md:p-4 text-center md:text-left md:w-[80%]'>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Kartik Gurjar</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Rocket lead</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">3rd year, Industrial Design</h5>
                    </div>
                </div>
                <div className="flex flex-col   md:flex-row  p-5 transform duration-200 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
                    <div className="relative w-full overflow-hidden">
                        <img className="object-fit max-h-[10rem]  w-full rounded-t-lg h-full p-4 " src={Img5} alt="" />
                    </div>
                    <div className='p-1 md:p-4 text-center md:text-left md:w-[80%]'>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Sumedh Sheshrao Gajghate</h5>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">RC Plane Lead</h5>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">3rd year, Industrial Design</h5>
                    </div>
                </div>
                <div className="flex flex-col   md:flex-row  p-5 transform duration-200 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
                    <div className="relative w-full overflow-hidden">
                        <img className="object-fit max-h-[10rem]  w-full rounded-t-lg h-full p-4" src={Img6} alt="" />
                    </div>
                    <div className='p-1 md:p-4  text-center md:text-left md:w-[80%]'>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Swapnil Gaikwad</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Drone Lead</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">2rd year, Integrated MSc Mathematics</h5>
                    </div>
                </div>
                <div className="flex flex-col   md:flex-row p-4 lg:p-1 transform duration-200 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
                    <div className="relative w-full overflow-hidden">
                        <img className="object-fit max-h-[10rem] w-full rounded-t-lg h-full p-4 " src={Img7} alt="" />
                    </div>
                    <div className='p-1 md:p-4 text-center md:text-left md:w-[80%]'>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Uday Kumar Nayak</h5>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Management HEad</h5>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">3rd year, Electrical & communication Engg.</h5>
                    </div>
                </div>

            </div>
        </div >
    )
}
//