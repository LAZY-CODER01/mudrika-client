"use client"; // Add this line to make it a Client Component

import React, { useState } from "react";
import { Lottie } from "../components/hooks/lottie"; // Assuming Lottie component is imported for animations
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_rpmjz0q";
    const templateID = "template_6c5yhcm";
    const userID = "8Tss15ugTO5xPmW5N";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          setStatus("Message Delivered Successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Failed to Contact. Please try again.");
        }
      );
  };

  return (
    <div className="bg-[#F0FAF7] min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Radial Gradient Background */}
      {/* <div
        className="absolute inset-0 blur-3xl z-[0]"
        style={{ backgroundColor: "#F0FAF7" }}
      /> */}

      {/* Main Content */}
      <div className="flex flex-col justify-evenly items-center h-auto w-full p-4 relative z-10 lg:mt-32">
        <h1 className="text-blue-500 text-4xl  lg:text-6xl font-extrabold text-center mt-4 mb-6">
          CONTACT US
        </h1>
        <div className="flex flex-col sm:flex-row justify-around items-center w-[90%] h-auto p-4 sm:space-x-8 space-y-8 sm:space-y-0">
          {/* Form Section */}
          <div className="flex flex-col sm:w-2/5 w-full items-center justify-between">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-between h-full w-full space-y-4 z-18"
            >
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border-none bg-blue-200 text-white rounded-lg shadow-neumorphism focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border-none bg-blue-200 text-white rounded-lg shadow-neumorphism focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border-none bg-blue-200 text-white rounded-lg shadow-neumorphism focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border-none bg-blue-200 text-white rounded-lg shadow-neumorphism focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
              />
              <textarea
                name="message"
                placeholder="Write your message"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border-none h-36 resize-none bg-blue-200 text-white rounded-lg shadow-neumorphism focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
              />
              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className="w-full h-full text-2xl py-2 mt-4 bg-blue-400 hover:bg-blue-600 text-white rounded-md transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
            {status && <p className="text-white mt-4">{status}</p>}
          </div>

          {/* Lottie Animation Section */}
          <div className="flex flex-col h-[300px] sm:w-2/5 w-full items-center justify-center mt-[1%] sm:mt-0 z-[-1]">
            <Lottie
              link="https://lottie.host/8d3fce25-2155-4ee4-8a7f-d93005ea2de9/NNJYhVZfSe.json"
              wid="55%"
              className="sm:w-[60%] w-[90%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
