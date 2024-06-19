import Image from "next/image";
import Social from "./social";
export default function Hero() {
  return (
    <div id="one" className="flex flex-col text-center h-screen">
      <section className="pt-36 md:w-full md:h-full flex flex-row justify-center items-center basis-1/4">
        <div className=" border-2 rounded-tl-[8rem] rounded-br-[8rem] border-black flex md:w-[16rem] md:h-[16rem] md:ml-0 w-[18rem] h-[18rem] bg-[#87dcff] relative  bg-clip-content">
          <Image
            src={"/image/3.png"}
            alt="profile"
            fill
            className="bg-clip-content border-2 rounded-tl-[8rem] rounded-br-[8rem]"
          />
          <span className="absolute w-36 h-36 -left-12  bottom-0  ">
            <Image
              src={"/image/hai.png"}
              alt="profile"
              fill
              className="bg-clip-content"
            />
          </span>
        </div>
      </section>
      <section className="flex flex-col md:justify-center md:w-full md:mt-0 items-center gap-5 basis-1/2">
        <h1 className="text-2xl md:text-5xl font-bold text-black flex flex-col relative">
          Hey There!{" "}
          <p className="bg-[#fed000] relative p-2">
            I'm Ansar Fadillah
            <span className="absolute w-24 h-24 left-[95%]  bottom-5">
              <Image
                src={"/image/peace.png"}
                alt="profile"
                fill
                className="bg-clip-content"
              />
            </span>
          </p>
        </h1>
        <p className="w-1/2 text-sm font-light leading-snug text-black md:text-lg lg:text-xl">
          Enthusiastic and Versatile undergraduate informatics's student. Who
          passionate in web development as Front-end or Back-end.
        </p>
        <a
          href="mailto:ansarfadillah20@gmail.com"
          className="bg-[#fed000]  hover:text-white text-black rounded-sm font-extrabold md:text-xl border-2 transition ease-in-out duration-150 border-black drop-shadow-[10px_10px_0_rgb(0,0,0,255)] hover:drop-shadow-[0px_0px_0_rgb(0,0,0,255)] p-5"
        >
          Send Me Mail
        </a>
        <Social />
      </section>
    </div>
  );
}
