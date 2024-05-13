import { Link } from "react-router-dom"


const Slide = ({ image, text, text2 }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-start w-full h-full bg-gray-900/70 px-28 '>
        <div className='text-start px-4 py-6 rounded-xl bg-black opacity-50 space-y-3'>
          <h1 className='text-xl font-semibold text-white lg:text-5xl'>
            {text} <span className="text-red-500 font-bold">WorkWave!</span>
          </h1>
          <h1 className='text-xl font-semibold text-white lg:text-3xl'>
            {text2} <span className="text-red-500 font-bold"> Wave!!</span>
            <br /> Spared Happiness Bring <span className="text-red-500 font-bold">Success!!!</span>
          </h1>
          <br />
          {/* <Link to = '/addJob' className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
              Post Job & Hire Expert
            </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Slide