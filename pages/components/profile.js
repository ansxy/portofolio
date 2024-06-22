import Image from "next/image";

export default function Profile() {
  return (
    <div id="two" className="flex relative">
      <section className="flex w-full flex-col items-center bg-[#fed000]">
        <div className="w-full flex flex-wrap  bg-[#efefef]">
          <p className="p-5 text-3xl font-bold border-r-2 border-t-2 border-black text-black ">
            ABOUT ME
          </p>
          <div className="border-b-2 border-black w-full"></div>
        </div>
        <div className=" h-full p-10 md:w-3/5 mt-5 flex w-full relative ">
          <section className="flex flex-col flex-grow-0 text-black md:text-lg ">
            <p className="font-light leading-snug text-2xl">
              I am a fresh graduate with a Bachelor's degree in Informatics from
              the Kalimantan Institute of Technology, with a GPA of 3.54. I
              graduated from the Bangkit Academy program in the Cloud Computing
              pathway. I primarily work on backend development but can also work
              on front-end projects. My diverse knowledge gives me an
              understanding of more than just backend development.
              <p className="mb-5 font-light mt-5 text-2xl"></p>
              For backend development, I primarily use Node.js and Go, focusing
              on REST API creation. I deploy applications using Google Cloud
              products Or AWS S3. On the frontend, I work with Vite, React and
              Next.js. My programming languages of choice are TypeScript,
              JavaScript, PHP, and Go.
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
