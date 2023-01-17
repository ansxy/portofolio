
export default function Card({ url, name, stack,description }) {

  return (
    <div key={name} className="last:col-start-2 p-10 bg-white border-2 transition ease-in-out duration-150 border-black drop-shadow-[10px_10px_0_rgb(0,0,0,255)] hover:drop-shadow-[0px_0px_0_rgb(0,0,0,255)] ">
      <section className="w-full flex justify-center">
        <a  target="_blank" href={url} className="text-black text-lg font-medium">{name}</a>
      </section>
      <section className="mt-4">
        <p className="font-light text-black">             
            {description}
        </p>
      </section>
      <section className="gap-2 flex flex-wrap mt-4 ">
        {stack.map((data) => {
          return <div className="badge badge-outline text-black">{data}</div>
        }) }
      </section>
    </div>
  );
}
