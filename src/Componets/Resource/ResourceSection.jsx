import React from 'react'
import img from '../../assets/Image/jobs.png';

const ResourceSection = () => {
    return (
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

    )
}

export default ResourceSection