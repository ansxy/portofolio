import Image from "next/image";

export default function Skills() {
  return (
    <div id="two" className="m-10 h-[48rem] flex flex-col">
      <section className="flex w-full flex-col items-start">
        <div className="w-full flex flex-row-reverse">
          <p className="p-5 text-3xl font-bold border-2 border-black text-black bg-white">
            SKILL
          </p>
          <div className="border-b-2 border-black w-full"></div>
        </div>
      </section>
      <section className="p-10 mt-10 w-full">
        <div className="flex justify-center">
          <p className="font-medium text-2xl text-center w-1/2 text-black">
            Over the past year I learned a lot of web technologies on client side,
            server side, database, tools etc here list what I learned.
          </p>
        </div>
        <div className="flex flex-col mt-5 w-full">
          <div className="flex justify-center">
            <p className="font-light text-xl  text-black">FRONT-END</p>
          </div>
          <div className="flex justify-center mt-2 gap-2">
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/html.svg"} alt="html" fill />
            </a>
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/css.svg"} alt="css" fill />
            </a>
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/tailwind.svg"} alt="tailwind" fill />
            </a>
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/react.svg"} alt="react" fill />
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-5 w-full">
          <div className="flex justify-center">
            <p className="font-light text-xl  text-black">BACK-END</p>
          </div>
          <div className="flex justify-center mt-2 gap-2">
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/javascript.svg"} alt="javascript" fill />
            </a>
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/nextjs.svg"} alt="nextjs" fill />
            </a>
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/nodejs.svg"} alt="nodejs" fill />
            </a>
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/php.svg"} alt="php" fill />
            </a>
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/mongodb.svg"} alt="mongodb" fill />
            </a>
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/postgresql.svg"} alt="postgresql" fill />
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-5 w-full">
          <div className="flex justify-center">
            <p className="font-light text-xl  text-black">TOOLS</p>
          </div>
          <div className="flex justify-center mt-2 gap-2">
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/git.svg"} alt="git" fill />
            </a>
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/github.svg"} alt="github" fill />
            </a>
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/vsc.svg"} alt="vsc" fill />
            </a>
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/stack.svg"} alt="stackoverflow" fill />
            </a>
            <a
              href="https://github.com/ansxy"
              className="h-16 rounded-full w-16 relative"
            >
              <Image src={"/image/figma.svg"} alt="figma" fill />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
