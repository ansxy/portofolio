import Image from "next/image";
import Link from "next/link";
import Social from "./social";
export default function Hero() {
  return <div className="m-10 h-[48rem] flex md:flex-col-reverse lg:flex-row">
    <section className="w-1/2 p-10 mt-20 flex md:justify-center md:flex-col md:w-full md:mt-0">
        <h1 className="text-7xl font-bold text-black flex flex-col">
            Hey There ! <span className="bg-orange-600">I'm Ansar Fadillah</span>
        </h1>
        <p className="text-3xl font-light leading-snug mt-8 text-black md:text-sm lg:text-3xl">
            Enthusiastic and motivated undergraduate informatics's student who like reading book,playing chess and learn new things about technology , especially in the field Web Development . Currently actively on research on blockchain in collage.
        </p>
        <Social/>
    </section>
    <section className=" w-1/2 p-10 md:w-full md:h-full">
        <div className="lg:h-4/5 lg:w-[60%] lg:ml-32 bg-white border-2 border-black flex md:h-full md:w-2/5 md:ml-0">
            <div className="bg-slate-500 flex flex-grow h-full relative ">
                <Image
                    src={'/image/2.jpg'}
                    alt="profile"
                    quality={100}
                    fill
                    
                />
            </div>
            <div className="w-4 bg-orange-500 border-l-2 border-black"/>
        </div>
    </section>
  </div>;
}
