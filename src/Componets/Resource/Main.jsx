import React from 'react'
import { IoGlobeOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { FaComputer } from "react-icons/fa6";
import img from '../../assets/Image/jobs.png'

function Main() {

  return (
    <>
      <div className='w-[100%] h-[400px] ' style={{ backgroundColor: 'blue' }}>
        <div className='float-right relative top-[35%] right-[200px] text-neutral-100'>
          <h1 className='text-[45px] '>Resource</h1>
          <p className='mt-2'>
            Empower Your Business with Office Based Jobs: Tailored <br /> Recruitment Solutions for Success
          </p>
        </div>
      </div>

      <div>
        <p className='text-[3em] text-center mt-5' style={{ color: "blue" }}><b>Traning Resource</b></p>

        <div className='flex items-center justify-around gap-[1em] mt-5' style={{ color: "blue" }}>
          <div className='text-center'>
            <CiSettings className='size-[8em] relative left-[2.7em] ' />
            <h1 className='text-stone-800 text-[2em] font-bold'>Recruitment Skills <br /> Workshops </h1>
            <p className='text-stone-800 mt-3 w-[15em] '>Host interactive workshops focused on honing essential recruitment skills such as sourcing, screening, and interviewing candidates. Offer hands-on exercises and role-playing scenarios to practice. </p>
          </div>
          <div className='text-center'>
            <IoGlobeOutline className='size-[8em] relative left-[2.7em]' />
            <h1 className='text-stone-800 text-[2em] font-bold'>Online Learning<br />Modules</h1>
            <p className='text-stone-800 mt-3 w-[15em]'>Develop a series of online learning modules covering key topics in recruitment, accessible anytime and anywhere for convenience. Offer engaging multimedia content, including videos, quizzes, and resources.  </p>
          </div>
          <div className='text-center'>
            <FaComputer className='size-[8em] relative left-[2.7em] mb-2' />
            <h1 className='text-stone-800 text-[2em] font-bold'>Expert-Led <br /> Webinars  </h1>
            <p className='text-stone-800 mt-3 w-[15em]'>Organize regular webinars featuring industry experts sharing insights and best practices in recruitment. Cover a range of relevant topics such as employer branding and candidate.</p>
          </div>
        </div>
      </div>

      <div className=' relative top-[3.5em] ml-[7em]'>
        <h1 className='text-[2.5em] '>
          OUR RESOURCES

        </h1>
        <div className='flex w-[100%]'>
          <div className='w-[25%]'>
            <p className='mt-7 mb-3'>WHITEPAPERS</p>
            <span className='text-neutral-500'>Access our comprehensive whitepapers covering a range of topics crucial to your recruitment success. From in-depth market analyses to actionable strategies for attracting top talent, our whitepapers provide valuable insights to inform your hiring decisions</span>

            <p className='mt-7 mb-3'>WEBINARS</p>
            <span className='text-neutral-500'>Join our engaging webinars led by industry thought leaders and experienced recruiters. Gain valuable knowledge on the latest recruitment techniques, emerging trends in the job market, and best practices for optimizing your hiring processes. </span>

            <p className='mt-7 mb-3'>CASE STUDIES</p>
            <span className='text-neutral-500'>Explore our case studies showcasing successful recruitment partnerships between Office Based Jobs and businesses like yours. Learn how our tailored solutions have helped companies overcome hiring challenges and achieve their goals.</span>
          </div>
          <div className='w-[50%] relative  left-[4em]'>
            <img className=' float-right' src={img} alt="" />

          </div>
        </div>
      </div >

      <div className='text-[2em] text-center mt-[3em]'>
        <h1><b>Behind the Sences wiith office Based Jobs</b></h1>
      </div>
      


    </>
  )
}

export default Main