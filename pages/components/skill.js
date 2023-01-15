import Image from "next/image";
import Caraousel from "./caraousel";
import Card from "./card";

export default function Skills() {
  return (
    <div id="two" className="m-10 flex flex-col">
      <section className="flex w-full flex-col items-start">
        <div className="w-full flex flex-row-reverse">
          <p className="p-5 text-3xl font-bold border-2 border-black text-black bg-white">
            PROJECT
          </p>
          <div className="border-b-2 border-black w-full"></div>
        </div>
      </section>
      <section className="p-10 mt-10 w-full">
        <div className="flex justify-center  mb-10">
          <p className="font-light md:text-lg lg:text-3xl text-center w-1/2 text-black">
            Over the past year I learned a lot of web technologies on client side,
            server side, database, tools etc here a list project i participated as backend or frontend.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full gap-10">
          <Card name="Daftar"/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        {/* <Caraousel/> */}
      </section>
    </div>
  );
}
