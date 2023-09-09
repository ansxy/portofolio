import Image from "next/image";
import Link from "next/link";
import Social from "./social";
export default function Hero() {
  return <div className="flex flex-col text-center">
    <section className=" p-10 md:w-full md:h-full flex flex-row justify-center">
        <div className=" border-2 rounded-tl-[8rem] rounded-br-[8rem] border-black flex md:w-[12rem] md:h-[12rem] md:ml-0 w-[16rem] h-[16rem] bg-[#87dcff] relative  bg-clip-content">
                <Image
                    src={'/image/3.png'}
                    alt="profile"
                    fill
                    className="bg-clip-content border-2 rounded-tl-[8rem] rounded-br-[8rem]"
                />
                <span className="absolute w-24 h-24 -left-12  bottom-0  ">
                <Image
                    src={'/image/hai.png'}
                    alt="profile"
                    fill
                    className="bg-clip-content"
                />
            </span>
            {/* <div className="w-4 bg-orange-500 border-l-2 border-black"/> */}
        </div>
    </section>
    <section className="flex flex-col md:justify-center md:w-full md:mt-0 items-center gap-5">
        <h1 className="text-2xl md:text-5xl font-bold text-black flex flex-col relative">
            Hey There! <p className="bg-[#fed000] relative p-2">I'm Ansar Fadillah
                <span className="absolute w-24 h-24 left-[95%]  bottom-5">
                    <Image
                        src={'/image/peace.png'}
                        alt="profile"
                        fill
                        className="bg-clip-content"
                    />
                </span>
            </p>
        </h1>
        <p className="w-1/2 text-sm font-light leading-snug text-black md:text-lg lg:text-xl">
            Enthusiastic and Versatile undergraduate informatics's student. Who passionate in web development as Front-end or Back-end.
        </p>
        <button className="bg-[#fed000]  hover:text-white text-black rounded-sm font-extrabold md:text-xl border-2 transition ease-in-out duration-150 border-black drop-shadow-[10px_10px_0_rgb(0,0,0,255)] hover:drop-shadow-[0px_0px_0_rgb(0,0,0,255)] p-5">Send Me Mail</button>
        <Social/>
    </section>
  </div>;
}
