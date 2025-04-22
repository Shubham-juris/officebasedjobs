import React from "react";
import { FileSearch, Lightbulb, MessageSquareText } from "lucide-react";

const services = [
  {
    title: "Tailored Guidance",
    icon: <FileSearch size={48} />,
    description:
      "We start by understanding your company's unique needs and culture to provide personalized recruitment solutions that align with your business goals.",
  },
  {
    title: "Innovative Recruitment",
    icon: <Lightbulb size={48} />,
    description: 
      "Using innovative recruitment methods and technology, we identify top talent efficiently and effectively, saving you time and resources in the hiring process.",
  },
  {
    title: "Transparent Communication",
    icon: <MessageSquareText size={48} />,
    description:
      "We believe in transparent communication throughout the process, keeping all parties informed and ensuring a smooth and successful recruitment experience.",
  },
];

export default function JobSeekerHome() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services for Job Seekers</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
            We're committed to connecting talented professionals with opportunities that match their skills and career aspirations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-indigo-600 rounded-lg text-white">
                {React.cloneElement(service.icon, { className: "text-white" })}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              
              <p className="text-blue-100">
                {service.description}
              </p>
              
              
            </div>
          ))}
        </div>        
        
      </div>
    </div>
  );
}