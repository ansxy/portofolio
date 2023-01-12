import Image from "next/image";
import { useState } from "react";
import Social from "./social";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [statusMessage , setStatusMessage] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage(true)
    let data = {
      email,
      name,
      subject,
      message,
    }
    try {      
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json,text/plain, */*",
          "Content-Type": "application/json",
        },
        body : JSON.stringify(data)
      }).then((res)=>{
        if(res.status === 200){
          setName('')
          setEmail('')
          setMessage('')
          setSubject('')
          setStatusMessage(false)
        }
      });
    } catch (error) {
      console.error(error)
    }
  };
  return (
    <div id="three" className="h-[20rem] flex">
      <section className="flex w-full flex-col items-center">
        <div className="w-full flex">
          <div className="border-t-2 border-black w-full"></div>
          <p className="p-5 text-3xl font-bold border-2 border-black text-black bg-white">
            Contact
          </p>
          <div className="border-t-2 border-black w-full"></div>
        </div>
        <section className="w-full flex flex-row justify-center">
          {/* <form
            className="w-full mt-10 flex-col flex items-center gap-5 text-black"
            method="post"
            onSubmit={handleSubmit}
          >
            <h1 className="text-black text-xl font-medium">
              Drop me a line if you have some interesting to discuss 😸😸😸
            </h1>
            <div className="flex flex-col w-[20rem]">
              <label for="email">Your Email</label>
              <input
                className="h-12 p-2 bg-white"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[20rem]">
              <label for="name">Your Name</label>
              <input
                className="h-12 p-2 bg-white"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[20rem]">
              <label for="subject">Subject</label>
              <input
                className="h-12 p-2 bg-white"
                name="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[20rem]">
              <label for="message">Message</label>
              <textarea
                className=" max-h-40 bg-white p-2"
                name="message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" type="submit" disabled = {statusMessage}>
              Submit
            </button>
          </form> */}
          <div className="mt-10">
            <div className="w-full items-center flex justify-center flex-col">
              <p className="text-bold text-xl text-black font-medium">
                Reach Me At
              </p>
              <span className="text-black">ansarfadillah20@gmail.com</span>
              <Social/>
            </div>
          </div>
        </section>
        <p className="mt-5 text-black">Handracted by me&#169;2022</p>
      </section>
    </div>
  );
}
