import Image from "next/image";
export default function Card({ url, name, stack,description,icon }) {
  return (
    <div key={name} className="md:last:col-start-2 md:p-10 p-8 bg-white border-2 transition ease-in-out duration-150 border-black drop-shadow-[10px_10px_0_rgb(0,0,0,255)] hover:drop-shadow-[0px_0px_0_rgb(0,0,0,255)] relative">
        <span className="absolute w-24 h-24 -left-12 -top-[5rem]  md:left-52 hidden md:flex ">
          <Image
              src={`/image/${icon}.png`}
              alt="profile"
              fill
              className="bg-clip-content"
          />
      </span>
      <section className="w-full flex justify-center relative">
        <a  target="_blank" href={url} className="text-black text-lg font-medium">{name}</a>
      </section>
      <section className="mt-4 max-h-[10rem] md:max-h-[10rem] md:min-h-[10rem] text-ellipsis overflow-hidden hover:max-h-[20rem]">
        <p className="font-light text-black">             
            {description}
        </p>
      </section>
      <section className="gap-2 flex flex-wrap mt-4 ">
        {stack ? (
          stack.map((data) => {
            return <div className="badge badge-outline text-black">{data}</div>
          }) 
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
