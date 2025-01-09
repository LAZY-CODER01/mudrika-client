import React from 'react';

const About = () => {
  return (
    <div className="bg-[#F0FAF7] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            As a Web Development Services We are Committed to Building Custom Web Solutions that Drive Business Success.
          </p>
        </div>

        {/* Mission Section */}
        <div className=" bg-[#D9F0EA] flex flex-col lg:flex-row gap-8 items-center mb-12">
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Team Meeting"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="lg:w-1/2 m-2">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Empowering Financial Independence
            </h3>
            <p className="text-gray-600 mb-6">
              At Financial Freedom Advisors, our mission is clear: to empower individuals and families to achieve financial independence. We are dedicated to providing personalized guidance and comprehensive solutions that align with our clients' unique goals and aspirations. Our focus is on helping you build a solid foundation for your financial future, enabling you to pursue your dreams with confidence.
            </p>
            {/* <a href="#read-more" className="text-blue-600 font-semibold">
              Read More
            </a> */}
          </div>
        </div>

        {/* Guiding Principles Section */}
        <div className="bg-[#D9F0EA] flex flex-col lg:flex-row-reverse gap-8 items-center">
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Team Collaboration"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="lg:w-1/2 m-2">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Guiding Principles
            </h3>
            <p className="text-gray-600 mb-4">
              Our values serve as the guiding principles that underpin everything we do at Financial Freedom Advisors:
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-6">
              <li className="mb-2">
                <strong>Integrity:</strong> We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions.
              </li>
              <li>
                <strong>Client-Centric Approach:</strong> Our clients' needs and goals are at the forefront of everything we do. We are committed to delivering tailored solutions that prioritize their best interests.
              </li>
            </ul>
            {/* <a href="#read-more" className="text-blue-600 font-semibold">
              Read More
            </a> */}
          </div>
        </div>

        <div className=" bg-[#D9F0EA] flex flex-col lg:flex-row gap-8 items-center mb-12 mt-14">
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Team Meeting"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="lg:w-1/2 m-2">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Empowering Financial Independence
            </h3>
            <p className="text-gray-600 mb-6">
              At Financial Freedom Advisors, our mission is clear: to empower individuals and families to achieve financial independence. We are dedicated to providing personalized guidance and comprehensive solutions that align with our clients' unique goals and aspirations. Our focus is on helping you build a solid foundation for your financial future, enabling you to pursue your dreams with confidence.
            </p>
            {/* <a href="#read-more" className="text-blue-600 font-semibold">
              Read More
            </a> */}
          </div>
        </div>

        {/* Guiding Principles Section */}
        <div className="bg-[#D9F0EA] flex flex-col lg:flex-row-reverse gap-8 items-center">
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Team Collaboration"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="lg:w-1/2 m-2">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Guiding Principles
            </h3>
            <p className="text-gray-600 mb-4">
              Our values serve as the guiding principles that underpin everything we do at Financial Freedom Advisors:
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-6">
              <li className="mb-2">
                <strong>Integrity:</strong> We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions.
              </li>
              <li>
                <strong>Client-Centric Approach:</strong> Our clients' needs and goals are at the forefront of everything we do. We are committed to delivering tailored solutions that prioritize their best interests.
              </li>
            </ul>
            {/* <a href="#read-more" className="text-blue-600 font-semibold">
              Read More
            </a> */}
          </div>
        </div>

      </div>
    </div>
  );
};


export default About
