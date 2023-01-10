import Image from "next/image";

export default function Profile() {
  return (
    <div id="one" className="m-10 h-[48rem] flex">
      <section className="flex w-full flex-col items-start">
        <div className="w-full flex">
          <p className="p-5 text-3xl font-bold border-2 border-black text-black bg-white">
            PROFILE
          </p>
          <div className="border-b-2 border-black w-full"></div>
        </div>
        <div className=" h-full p-10 w-full mt-5 flex">
          <section className="flex flex-col flex-grow-0 text-black">
            <p className="text-xl font-medium">
              Hiiii! I'm Fadil, and i calling my self a Web Developer
            </p>
            <p className="w-1/2 font-light text-lg leading-snug">
              I am an active student at the Kalimantan Institute of Technology
              majoring in informatics and I am currently in my 6th semester. In
              these 6 semesters I have participated in many workshops and
              competitions related to web development. In these 6 semesters I
              have also made several simple projects to support my portfolio as
              web development you can take a look on my <a target="_blank" href="https://github.com/ansxy" className="font-blod text-orange-600">github</a>.
            </p>
            <p className="w-1/2 font-light text-lg leading-snug">
                Having dreams of becoming an expert in the field of web development, with big dreams comes great sacrifices that make me have to study harder in college and outside of college.
            </p>
          </section>

          <section className="bg-white w-1/2 items-center flex flex-col text-black hover:drop-shadow-[20px_20px_0_rgb(255,110,49,1)] hover:ease-out duration-300">
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
          </section>
        </div>
      </section>
    </div>
  );
}
