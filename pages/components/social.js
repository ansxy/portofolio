import Image from "next/image";

export default function Social() {
  return (
              <ul className="flex flex-row gap-8 mt-4">
                <a
                  href="https://github.com/ansxy"
                  className="h-16 rounded-full w-16 relative "
                >
                  <Image src={"/image/github.svg"} alt="profile" fill className="rounded-full hover:bg-orange-500"/>
                </a>
                <a
                  href="https://www.linkedin.com/in/ansar-fadillah-a09ba1189/"
                  className="h-16 rounded-full w-16 relative"
                >
                  <Image src={"/image/linkedin.svg"} alt="profile" fill className="rounded-full hover:bg-orange-500" />
                </a>
                <a
                  href="https://www.instagram.com/ansarfadillah_/"
                  className="h-16 rounded-full w-16 relative"
                >
                  <Image src={"/image/instagram.svg"} alt="profile" fill className="rounded-full hover:bg-orange-500" />
                </a>
                <a
                  href="mailto:ansarfadillah20@gmail.com"
                  className="h-16 rounded-full w-16 relative"
                >
                  <Image src={"/image/email.svg"} alt="profile" fill className="rounded-full hover:bg-orange-500" />
                </a>
              </ul>
  );
}
