import './App.css';
import { ExecutiveBody } from './component/ExecutiveBody';
import { Gallery } from './component/Gallery';

export default function App() {
  return (
      <div >
        <div className='bg-blue-900 min-h-100vh '>
          <div className='pt-[4%] pl-[10%]'>
            <h2 className='text-2xl tracking-wide text-white font-julius'>GALLERY</h2>
          </div>
          <div className='font-black w-[30%] pl-[10%]'>
            < hr />
          </div>
          <div className='w-[100vw]'>
            <Gallery />
          </div>
        </div>
        <div className='bg-blue-800 min-h-screen '>
          <div className='pt-[5%] pl-[10%]'>
            <h2 className='text-2xl tracking-wide text-white'>EXECUTIVE BODY</h2>
            <h5 className='font-bold text-white'>MEMBERS</h5>
          </div>
          <div className='font-black w-[40%] pl-[10%]'>
            < hr />
          </div>
          <div className='flex justify-center p-2 text-white'>
            <ExecutiveBody />
          </div>
        </div>
      </div>
  )
}
