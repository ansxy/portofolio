import Image from "next/image";
import Caraousel from "./caraousel";

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
        <div className="flex justify-center  mb-10">
          <p className="font-medium text-2xl text-center w-1/2 text-black">
            Over the past year I learned a lot of web technologies on client side,
            server side, database, tools etc here list what I learned.
          </p>
        </div>
        <Caraousel/>
      </section>
    </div>
  );
}
