import Image from "next/image";

export default function Profile() {
  return (
    <div id="one" className="m-10 flex relative">
      {/* <div className="bg-orange-500 w-full h-[50rem] absolute -z-10"></div> */}
      <section className="flex w-full flex-col items-start">
        <div className="w-full flex">
          <p className="p-5 text-3xl font-bold border-2 border-black text-black bg-white">
            PROFILE
          </p>
          <div className="border-b-2 border-black w-full"></div>
        </div>
        <div className=" h-full p-10 w-full mt-5 flex">
          <section className="flex flex-col flex-grow-0 text-black lg:text-3xl md;text-lg">
            <p className="w-1/2 font-light leading-snug">
              I am currently an active student pursuing a degree in Informatics at the Kalimantan Institute of Technology, currently in my sixth semester. Throughout my studies, I have been actively involved in various web development workshops and competitions, which have allowed me to expand my skills and knowledge in this field. Additionally, I have developed several simple projects to support my web development portfolio.
            </p>
            <p className="font-light leading-snug">
              My primary focus in web development has been on backend development, where I have gained proficiency in a variety of tools and programming languages. I am committed to furthering my expertise in this area and am eager to explore new challenges and opportunities in the field.
            </p>
            <p className="mb-5 font-light mt-5">Technologies i'am using </p>
            <ul className="font-light h-[10rem] flex flex-col flex-wrap">
              <li>Javascript</li>
              <li>React</li>
              <li>Next JS</li>
              <li>Node JS</li>
              <li>Express</li>
              <li>Postgresql</li>
              <li>Mongodb</li>
              <li>Express</li>
            </ul>
          </section>
          <section className="bg-white w-2/5 items-center flex flex-col text-black hover:drop-shadow-[20px_20px_0_rgb(255,110,49,1)] hover:ease-out duration-300 mb-10">
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
