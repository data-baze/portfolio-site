"use client"
import React from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
             method: 'POST',

             headers: {
                'Content-Type': 'application',
             },

            body: JSONdata, 
        }
        
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);

        if (response.status === 200) {
            console.log('Message sent.');
        }
    };
  return (
    <section className=" grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 ">
      <div>
        <h5 className=" text-xl font-bold text-white my-2 ">
          Let&apos;s connect{" "}
        </h5>
        <p className=" text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, i&apos;ll
          surely get back to you!
        </p>
        <div className="socials flex flex-row gap-2  ">
          <Link href="https://github.com/data-baze/">
            <Image
              className="h-10 w-10 rounded-full border-2  border-white bg-white"
              src={GithubIcon}
              alt=" Github Icon"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/data-bassey/">
            <Image
              className="h-full w-10  bg-white border-2 border-white rounded-md"
              src={LinkedinIcon}
              alt=" Linkedin Icon"
            />
          </Link>
        </div>
      </div>

      <div>
        <form className=" flex flex-col " onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className=" text-white block mb-2 text-sm font-medium "
            >
              Email
            </label>
            <input
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="email"
              name="email"
              id="email"
              required
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Subject"
              className=" text-white block mb-2 text-sm font-medium "
            >
              Subject
            </label>
            <input
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="subject"
              required
              name="subject"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium "
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hello Data! ..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5  rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
