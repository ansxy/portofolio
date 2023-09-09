import Card from "./card";
import project from '../../public/lib/project.json'

export default function Skills() {
  return (
    <div id="two" className="flex flex-col bg-[#ffff] ">
      <section className="flex w-full flex-col items-start">
        <div className="w-full flex flex-row-reverse">
          <p className="p-5 text-3xl font-bold border-2 border-black text-black">
            PROJECT
          </p>
          <div className="border-b-2 border-black w-full bg-[#fed000]"></div>
        </div>
      </section>
      <section className="p-10 bg-[#ffff] flex flex-col items-center">
        <div className="flex w-3/5 items-center  mb-10">
          <p className="font-light md:text-lg lg:text-2xl text-center  text-black">
            Over the past year I learned a lot of web technologies on client side,
            server side, database, tools etc . This a list project i participated as backend or frontend.
          </p>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 w-[80%] gap-10 grid-cols-1 grid-flow-row ">
        {!project ? (
          <></>
        ) :(
          project.data.map((data) => 
          {
            return <Card url={data.url} name={data.name} description={data.description} stack={data.languages}/>
          })
        )}
        </div>
      </section>
    </div>
  );
}
