import Image from "next/image";

export default function Social() {
  return (
              <ul className="flex flex-row gap-8 mt-4 mb-4 font-">
                <div className="border-4 border-[#fed000] flex rounded-full p-2 ">
                  <a
                    href="https://github.com/ansxy"
                    className="h-10 w-10 md:h-12 rounded-full md:w-12 relative "
                  >
                    <Image src={"/image/github.svg"} alt="profile" fill className="rounded-full hover:bg-[#fed000]"/>
                  </a>
                </div>
                <div className="border-4 border-[#fed000] flex rounded-full p-2 ">

                  <a
                    href="https://www.linkedin.com/in/ansar-fadillah-a09ba1189/"
                    className="h-10 w-10 md:h-12 rounded-full md:w-12 relative "
                  >
                    <Image src={"/image/linkedin.svg"} alt="profile" fill className="rounded-full hover:bg-[#fed000]" />
                  </a>
                </div>
                <div className="border-4 border-[#fed000] flex rounded-full p-2 ">
                  <a
                    href="https://www.instagram.com/ansarfadillah_/"
                    className="h-10 w-10 md:h-12 rounded-full md:w-12 relative "
                  >
                    <Image src={"/image/instagram.svg"} alt="profile" fill className="rounded-full hover:bg-[#fed000]" />
                  </a>
                </div>
                {/* <div className="border-4 border-[#fed000] flex rounded-full p-2 ">
                  <a
                    href="mailto:ansarfadillah20@gmail.com"
                    className="h-10 w-10 md:h-16 rounded-full md:w-16 relative "
                  >
                    <Image src={"/image/email.svg"} alt="profile" fill className="rounded-full hover:bg-[#fed000]" />
                  </a>
                </div> */}
              </ul>
  );
}
