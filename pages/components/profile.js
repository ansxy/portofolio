import Image from "next/image";

export default function Profile() {
  return (
    <div id="two" className="flex relative">
      {/* <div className="bg-orange-500 w-full h-[50rem] absolute -z-10"></div> */}
      <section className="flex w-full flex-col items-center bg-[#fed000]">
        <div className="w-full flex flex-wrap  bg-white">
          <p className="p-5 text-3xl font-bold border-r-2 border-t-2 border-black text-black bg-white">
            ABOUT ME
          </p>
          <div className="border-b-2 border-black w-full"></div>
        </div>
        <div className=" h-full p-10 md:w-3/5 mt-5 flex w-full relative ">
          <section className="flex flex-col flex-grow-0 text-black md:text-lg ">
            <p className="font-light leading-snug">
              I am currently an active student pursuing a Bachelor's degree in
              Informatics at the Kalimantan Institute of Technology, currently
              in my eigth semester. Graduated from the Bangkit Academy program
              in the Cloud Computing pathway. Occasionally do front-end too my
              diverse knowladge make me an understand little more than just
              backend.
            </p>
            <p className="mb-5 font-light mt-5">
              Technologies i'am using for backend i usually using node js and Go
              for the REST API and google cloud product for deploying it and for
              frontend i using vite,react vanilla, and next js. For the
              languange i using a Typescript,Javascript, and Go
            </p>
            <span className="absolute w-24 h-24 -left-10  md:-left-16 -rotate-45 hidden md:flex ">
              <Image
                src={"/image/4.png"}
                alt="profile"
                fill
                className="bg-clip-content"
              />
            </span>
            <span className="absolute w-24 h-24 -left-10 top-36  md:-left-16 -rotate-45 hidden md:flex ">
              <Image
                src={"/image/party.png"}
                alt="profile"
                fill
                className="bg-clip-content"
              />
            </span>
            <span className="absolute w-24 h-24 -left-10 top-64  md:-left-16  hidden md:flex ">
              <Image
                src={"/image/mac.png"}
                alt="profile"
                fill
                className="bg-clip-content"
              />
            </span>
            <span className="absolute z-10  w-48 h-[30rem] -top-[6rem] -right-40  hidden md:flex ">
              <Image
                src={"/image/kuliah.svg"}
                alt="profile"
                fill
                className="bg-clip-content"
              />
            </span>
          </section>
        </div>
      </section>
    </div>
  );
}
