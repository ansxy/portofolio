import Image from "next/image";

export default function Profile() {
  return (
    <div id="one" className="flex relative">
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
              I am currently an active student pursuing a Bachelor's degree in Informatics at the Kalimantan Institute of Technology, currently in my seventh semester. Graduated from the Bangkit Academy program in the Cloud Computing pathway and Certified as an Associate Cloud Engineer by Google. Occasionally do front-end too my diverse knowladge make me an understand little more than just backend. Beside all of that i have human side too, sometime on my free time i listen music, reading book or just playing with my cat, i have cat his name Muhammad Asyncrounous or <span className="relative  group">
                <span className=" transition duration-300 ease-in-out ">ACENG</span>
                <span className="absolute hidden h-[15rem] w-[15rem] bg-white rounded-lg shadow-lg -left-1/2 transform translate-x-1/2 group-hover:block">
                  <Image
                      src={'/image/Aceng.png'}
                      alt="profile"
                      fill
                      className="bg-clip-content"
                  />
                </span></span> i don't know what type cat he is but i'm sure he that type make everyone happy when see him.
            </p>
            <p className="mb-5 font-light mt-5">Technologies i'am using for backend i usually using node js for the REST API and google cloud product for deploying it and for frontend i using vite,react vanilla, and next js.</p>
            <span className="absolute w-24 h-24 -left-10  md:-left-16 -rotate-45 hidden md:flex ">
                <Image
                    src={'/image/4.png'}
                    alt="profile"
                    fill
                    className="bg-clip-content"
                />
            </span>
            <span className="absolute w-24 h-24 -left-10 top-36  md:-left-16 -rotate-45 hidden md:flex ">
                <Image
                    src={'/image/party.png'}
                    alt="profile"
                    fill
                    className="bg-clip-content"
                />
            </span>
            <span className="absolute w-24 h-24 -left-10 top-64  md:-left-16  hidden md:flex ">
                <Image
                    src={'/image/mac.png'}
                    alt="profile"
                    fill
                    className="bg-clip-content"
                />
            </span>
            <span className="absolute z-10  w-48 h-[30rem] -top-45 -right-40  hidden md:flex ">
              <Image
                  src={"/image/kuliah.svg"}
                  alt="profile"
                  fill
                  className="bg-clip-content"
                />
            </span>
          </section>
          {/* <section className="bg-white w-2/5 items-center flex flex-col text-black hover:drop-shadow-[20px_20px_0_rgb(255,110,49,1)] hover:ease-out duration-300 mb-10">
            <h1 className="font-bold text-lg mt-10">EDUCATION</h1>
            <ul className="flex gap-3 flex-col p-10 flex-grow relative">
              <li className="group/smk hover:bg-orange-500">
                <div className="collapse">
                  <input type="checkbox" />
                  <p className="collapse-title font-bold flex flex-col ">
                    SMK MUHAMMADIYAH 1
                    <span className="font-light">
                      Teknik Instalasi Tenaga Listrik
                    </span>
                  </p>
                  <p className="collapse-content">
                    In Vocational High School, I majored in electrical
                    installation engineering(TITL), where I learned a lot about
                    electricity, especially in the high power section. In my
                    final assignment, I took the PLC (Programming logic control)
                    theme, this is where my interest in programming began
                  </p>
                </div>
                <Image
                  src={"/image/smk.svg"}
                  alt="profile"
                  fill
                  className="transition ease-in opacity-0 group-hover/smk:block group-hover/smk:opacity-100 group-hover/smk:-translate-x-[30.75rem] duration-300 "
                />
              </li>
              <li className="group/kuliah hover:bg-orange-500">
                <div className="collapse">
                  <input type="checkbox" />
                  <p className="collapse-title font-bold flex flex-col">
                    INSTITUT TEKNOLOGI KALIMANTAN
                    <span className="font-light">Informatika</span>
                  </p>
                  <p className="collapse-content">
                    I am currently studying in semester 6 with a satisfactory
                    GPA for now. Active in extracurricular activities in
                    technology development, especially web and blockchain
                    development technology.
                  </p>
                </div>
                <Image
                  src={"/image/kuliah.svg"}
                  alt="profile"
                  fill
                  className="transition ease-in opacity-0 group-hover/kuliah:block group-hover/kuliah:opacity-100 group-hover/kuliah:-translate-x-[30.75rem] duration-300 "
                />
              </li>
            </ul>
          </section> */}
        </div>
      </section>
    </div>
  );
}
