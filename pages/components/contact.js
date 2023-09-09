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
    <div className="h-[20rem] flex bg-[#c2fcf3]">
      <section className="flex w-full flex-col items-center">
        <div className="w-full flex">
          <div className="border-t-2 border-black w-full"></div>
          <p className="p-5 text-3xl font-bold border-2 border-black text-black bg-white">
            Contact
          </p>
          <div className="border-t-2 border-black w-full"></div>
        </div>
        <section className="w-full flex flex-row justify-center">
          <div className="mt-10 " id="three" >
            <div className="w-full items-center flex justify-center flex-col">
              <p className="text-bold text-xl text-black font-medium">
                Reach Me At
              </p>
              <span className="text-black">ansarfadillah20@gmail.com</span>
              <Social/>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
