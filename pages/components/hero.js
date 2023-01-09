import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return <div className="m-10 h-[43rem] flex">
    <section className=" w-1/2 p-10 mt-20">
        <h1 className="text-7xl font-bold text-black flex flex-col">
            Hey There ! <span>I'm Ansar Fadillah</span>
        </h1>
        <p className="text-3xl font-light leading-snug mt-8 text-black">
            Enthusiastic and motivated undergraduate informatics's student who like reading book and learn new things about technology , especially in the field Web Development . Currently actively on research on blockchain in collage.
        </p>
        <ul className="flex flex-row gap-8 mt-4">
            <a href="https://github.com/ansxy" className="h-16 rounded-full w-16 relative">
                <Image
                    src={'/image/github.svg'}
                    alt="profile"
                    fill
                    
                />
            </a>
            <a href="https://www.linkedin.com/in/ansar-fadillah-a09ba1189/" className="h-16 rounded-full w-16 relative" >
                <Image
                    src={'/image/linkedin.svg'}
                    alt="profile"
                    fill
                    
                />
            </a>
            <a href="https://www.instagram.com/ansarfadillah_/" className="h-16 rounded-full w-16 relative">
                <Image
                    src={'/image/instagram.svg'}
                    alt="profile"
                    fill
                    
                />
            </a>
        </ul>
    </section>
    <section className=" w-1/2 p-10">
        <div className="h-4/5 w-4/6 ml-32 bg-white border-2 border-black flex">
            <div className="bg-slate-500 flex flex-grow h-full relative">
                <Image
                    src={'/image/2.jpg'}
                    alt="profile"
                    fill
                    
                />
            </div>
            <div className="w-4 bg-yellow-100 border-l-2 border-black"/>
        </div>
    </section>
  </div>;
}
