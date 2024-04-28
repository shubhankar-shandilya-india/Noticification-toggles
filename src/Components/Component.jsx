import ToggleSwitch from './ToggelSwitch';

const Component = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[90vw] sm:w-[70vw] md:w-[40vw] xl:w-[30vw] 2xl:w-[25vw] flex flex-col items-center ' >
                <div className='text-4xl text-blue-900 font-bold my-5'>JACK&JONES</div>
                <div className='bg-slate-400  h-[0.4px] w-full'></div>
                <div className='text-sm text-slate-500 my-1'>Noticification setting for</div>
                <div className='font-semibold mb-1'>Customerid@gmail.com</div>
                <div className='font-semibold mb-2'>+91 9876543210</div>
                <div className=' text-sm lg:text-base'>Update your noticification preferences for our</div>
                <div className=''>communication channels</div>

                <table className="w-full mb-2 border-separate border-spacing-y-3 ">
                    <thead>
                        <tr>
                            <td className=" text-center py-2 rounded-l-lg rounded-r-lg"></td>
                            <td className=" text-center py-2 text-slate-500">Promotional</td>
                            <td className=" text-center py-2 rounded-r-lg text-slate-500">Transactional</td>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr className="py-5 bg-slate-100 border border-slate-950">
                            <td className="border border-r-0 border-slate-300 pl-3 py-3 font-semibold rounded-l-lg  ">SMS</td>
                            <td className="border border-x-0 border-slate-300 py-3"><ToggleSwitch /></td>
                            <td className="border border-l-0 border-slate-300 py-3 rounded-r-lg"><ToggleSwitch /></td>
                        </tr>
                        <tr className="py-5  bg-slate-100">
                            <td className="border border-r-0 border-slate-300 pl-3 py-3 font-semibold rounded-l-lg">Whatsapp</td>
                            <td className="border border-x-0 border-slate-300 py-3"><ToggleSwitch /></td>
                            <td className="border border-l-0 border-slate-300 py-3  rounded-r-lg"><ToggleSwitch /></td>
                        </tr>
                        <tr className="py-5  bg-slate-100">
                            <td className=" border border-r-0 border-slate-300 pl-3 py-3 font-semibold rounded-l-lg ">Email</td>
                            <td className="border border-x-0 border-slate-300 py-3"><ToggleSwitch /></td>
                            <td className="border border-l-0 border-slate-300 py-3 rounded-r-lg"><ToggleSwitch /></td>
                        </tr>
                    </tbody>
                </table>

                <button className=' px-6 transition duration-300 mb-2 w-full sm:w-fit bg-blue-600 hover:bg-blue-500 py-2 font-medium text-white rounded-md'>Save Preferences</button>
            </div>
        </div>
    )
}

export default Component