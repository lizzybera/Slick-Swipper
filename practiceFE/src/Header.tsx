import  { useState } from 'react'

const Header = () => {
   const [change, setChange] = useState<boolean>(false)

   const onChange = ()=>{
    if (window.scrollY >= 800) {
        setChange(false)
    } else {
        setChange(true)
    }
   }

   window.addEventListener("scroll", onChange)

  return (
    // container
    <div>
        {
            change ? (<div className='w-full h-[70px] bg-green-400 flex justify-center items-center'>
            {/* main */}
            <div className='w-[80%] h-full justify-between items-center flex'>
                
                {/* holder */}
                <div className='flex justify-center items-center '>
                    <div className='text-[20px] italic cursor-pointer'>Logo</div>
    
                    <div className='flex ml-[70px] justify-center items-center'>
                        <div className='mr-7 cursor-pointer'>Home</div>
                        <div className='mr-7 cursor-pointer'>About</div>
                        <div className='mr-7 cursor-pointer'>contacts</div>
                        <div className='mr-7 cursor-pointer'>EveryWhere</div>
                    </div>
                </div>
    
                {/* Buttons */}
                <div className='flex h-[40px]'>
                    <button className='p-2 flex justify-center items-center rounded-md bg-slate-600 mr-4 cursor-pointer hover:bg-slate-400 duration-300 transition-all'>sign-In</button>
                    <button className='p-2 cursor-pointer mr-4 flex justify-center items-center rounded-md bg-slate-400 hover:bg-slate-600 duration-300 transition-all'>sign-up</button>
                </div>
            </div>
        </div>) : (<div className='w-full h-[70px] bg-blue-400 flex justify-center items-center fixed top-0 duration-300 transition-all'>
        {/* main */}
        <div className='w-[80%] h-full justify-between items-center flex'>
            
            {/* holder */}
            <div className='flex justify-center items-center '>
                <div className='text-[20px] italic cursor-pointer'>Logo</div>

                <div className='flex ml-[70px] justify-center items-center'>
                    <div className='mr-7 cursor-pointer'>Home</div>
                    <div className='mr-7 cursor-pointer'>About</div>
                    <div className='mr-7 cursor-pointer'>contacts</div>
                    <div className='mr-7 cursor-pointer'>EveryWhere</div>
                </div>
            </div>

            {/* Buttons */}
            <div className='flex h-[40px]'>
                <button className='p-2 flex justify-center items-center rounded-md bg-slate-600 mr-4 cursor-pointer hover:bg-slate-400 duration-300 transition-all'>sign-In</button>
                <button className='p-2 cursor-pointer mr-4 flex justify-center items-center rounded-md bg-slate-400 hover:bg-slate-600 duration-300 transition-all'>sign-up</button>
            </div>
        </div>
    </div>)
        }
    </div>
  )
}

export default Header