import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ResourceContact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Submit to your backend or email API
        console.log("Form submitted:", formData);
    };


    // Inside your component
    const [showHours, setShowHours] = useState(false);

    const hours = {
        Monday: "09:00 a.m. – 05:00 p.m.",
        Tuesday: "09:00 a.m. – 05:00 p.m.",
        Wednesday: "09:00 a.m. – 05:00 p.m.",
        Thursday: "09:00 a.m. – 05:00 p.m.",
        Friday: "09:00 a.m. – 05:00 p.m.",
        Saturday: "Closed",
        Sunday: "Closed",
    };

    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

    return (
        <section className="w-full px-4 py-16 bg-white text-center">
            <h2 className="py-4 text-3xl font-extrabold ">Contact Us</h2>

            {/* Office Info Section */}
            <div className="mt-20 text-center">
                <h3 className="uppercase tracking-wide text-sm font-semibold text-gray-700 py-3">
                    Better yet, see us in person!
                </h3>
                <p className="text-gray-600 py-3">
                    We love our customers, so feel free to visit during normal business hours.
                </p>

                <div className="py-3">
                    <p className="uppercase font-semibold text-sm text-gray-800 py-3">Office Based Jobs</p>
                    <a
                        href="mailto:monashah44271@gmail.com"
                        className="text-blue-600 underline"
                    >
                        monashah44271@gmail.com
                    </a>
                </div>

                <div className="mt-8">
                    <p className="uppercase text-sm text-gray-800 font-semibold py-3">Hours</p>

                    <div
                        className="flex items-center justify-center text-gray-600 cursor-pointer"
                        onClick={() => setShowHours(!showHours)}
                    >
                        <p className="mr-2">
                            Open today{" "}
                            <span className="text-blue-700 font-medium">{hours[today]}</span>
                        </p>
                        {showHours ? (
                            <ChevronUp className="w-4 h-4 text-gray-600" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-gray-600" />
                        )}
                    </div>

                    {showHours && (
                        <ul className="text-sm text-gray-700 mt-3 space-y-1 text-center">
                            {Object.entries(hours).map(([day, time]) => (
                                <li key={day}>
                                    {day}:{" "}
                                    <span
                                        className={`font-medium ${day === today ? "text-blue-700" : "text-gray-800"
                                            }`}
                                    >
                                        {time}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>



            </div>
        </section>
    );
};

export default ResourceContact;
