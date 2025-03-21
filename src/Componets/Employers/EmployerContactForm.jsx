import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const EmployerContactForm = () => {
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
            <h2 className="py-4 text-3xl font-extrabold mb-2">Contact Us</h2>
            <p className="uppercase tracking-wider text-sm mb-10 text-gray-600">Drop us a line!</p>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-100 text-gray-800 rounded-md focus:outline-none"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-100 text-gray-800 rounded-md focus:outline-none"
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-100 text-gray-800 rounded-md focus:outline-none"
                />

                <button
                    type="submit"
                    className="px-10 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-semibold tracking-wider"
                >
                    SEND
                </button>
            </form>

            {/* reCAPTCHA note */}
            <p className="text-xs text-gray-500 mt-8">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy" className="text-blue-600 underline">
                    Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://policies.google.com/terms" className="text-blue-600 underline">
                    Terms of Service
                </a>{" "}
                apply.
            </p>

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

export default EmployerContactForm;
