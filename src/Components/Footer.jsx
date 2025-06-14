import React from "react";
// import {
//   FaDribbbleSquare,
//   FaFacebookF ,
//   FaGithubSquare  ,
//   FaSquareInstagram ,
//   FaXTwitter ,
// } from 'react-icons';
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="text-3xl w-full m-auto text-[#00df9a] font-bold mt-2">
          REACT.
        </h1>
        <p className="py-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          corrupti repellendelit, numquam delectus, quaerat esse et rerum alias.
        </p>
        <div className="text-sm flex items-center justify-start gap-3">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Github</p>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
            <h6 className="font-medium text-gray-400">
                Supports
            </h6>
          <ul>
            <li className="text-sm py-2">Analysis</li>
            <li className="text-sm py-2">Marketing</li>
            <li className="text-sm py-2">Commerce</li>
            <li className="text-sm py-2">Insight</li>
          </ul>
        </div>

        <div>
            <h6 className="font-medium text-gray-400">
                Solutions
            </h6>
          <ul>
            <li className="text-sm py-2">Connect</li>
            <li className="text-sm py-2">Policy</li>
            <li className="text-sm py-2">Services</li>
            <li className="text-sm py-2">Legal</li>
          </ul>
        </div>

        <div>
            <h6 className="font-medium text-gray-400">
                Company
            </h6>
          <ul>
            <li className="text-sm py-2">Blogs</li>
            <li className="text-sm py-2">Human Resource</li>
            <li className="text-sm py-2">Jobs</li>
            <li className="text-sm py-2">Insight</li>
          </ul>
        </div>

         <div>
            <h6 className="font-medium text-gray-400">
                Legal
            </h6>
          <ul>
            <li className="text-sm py-2">Blogs</li>
            <li className="text-sm py-2">Human Resource</li>
            <li className="text-sm py-2">Jobs</li>
            <li className="text-sm py-2">Insight</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
