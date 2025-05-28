import React from "react";
import approachImg from "../../assets/Image/employers/work.jpg";
import resourcesImg from '../../assets/Image/employers/CHOOSEUS.png'
import img from '../../assets/Image/employers/image.jpg'
import imge from '../../assets/Image/employers/books.jpg'

const WorkWithUs = () => {
  return (
    <section className="w-full px-4 py-12 flex flex-col justify-center mx-auto max-w-7xl  bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold font-serif mb-12">WORK WITH US</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <img
          src={approachImg}
          alt="Our Approach"
          className="rounded-md w-full h-[300px] object-cover"
        />
        <div className="text-center px-4 md:px-0">
          <h3 className="uppercase text-lg font-semibold tracking-widest mb-4">
            Our Approach
          </h3>
          <p className="text-gray-600 text-lg px-4 md:px-0 ">
            At Office Based Jobs, we believe in partnering closely with employers to understand their unique requirements. Our approach to recruitment and talent acquisition is centered around personalized service and customized solutions.
          </p>
        </div>
      </div>
      {/* <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center px-4 md:px-0">
          <h3 className="uppercase text-lg font-semibold tracking-widest mb-4">
            Additional Resources
          </h3>
          <p className="text-gray-600 text-lg">
            Access additional resources such as blog articles, whitepapers, and webinars on recruitment best practices. Have questions? Check out our FAQs section for answers to common inquiries.
          </p>
        </div>
        <img
          src={resourcesImg}
          alt="Additional Resources"
          className="rounded-md w-full h-[300px] object-cover"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center mt-16 mb-16">
        <img
          src={img}
          alt="Our Approach"
          className="rounded-md w-full h-[300px] object-cover"
        />
        <div className="text-center px-4 md:px-0">
          <h3 className="uppercase text-lg font-semibold tracking-widest mb-4">
            ADDITIONAL RESOURCES
          </h3>
          <p className="text-gray-600 text-lg px-4 md:px-0 ">
            Access additional resources such as blog articles, whitepapers, and webinars on recruitment best practices. Have questions? Check out our FAQs section for answers to common inquiries.
          </p>
        </div>
      </div> */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center px-4 md:px-0">
          <h3 className="uppercase text-lg font-semibold tracking-widest mb-4">
            CHOOSE US
          </h3>
          <p className="text-gray-600 text-lg">
            Choose Office Based Jobs for our expertise, personalized service, extensive network, innovative approach, and commitment to transparent communication. We’re dedicated to helping your business succeed through effective talent acquisition strategies.
          </p>
        </div>
        <img
          src={imge}
          alt="Choose Us"
          className="rounded-md w-full h-[300px] object-cover"
        />
      </div>
    </section>
  );
};

export default WorkWithUs;