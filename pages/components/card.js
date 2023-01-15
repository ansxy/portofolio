export default function Card({ url, name, stack,description }) {
  return (
    <div className="last:col-start-2 p-10 bg-white border-2 transition ease-in-out duration-150 border-black drop-shadow-[10px_10px_0_rgb(0,0,0,255)] hover:drop-shadow-[0px_0px_0_rgb(0,0,0,255)] ">
      <section className="w-full flex justify-center">
        <p className="text-black text-lg font-medium">{name}</p>
      </section>
      <section className="mt-4">
        <p className="font-light text-black">             
            Over the past year I learned a lot of web technologies on client side,
            server side, database, tools etc here a list project i participated as
            backend or frontend.
        </p>
      </section>
      <section className="gap-2 flex flex-wrap mt-4 ">
        <div className="badge badge-outline text-black">Javascript</div>
        <div className="badge badge-outline text-black">Javascript</div>
        <div className="badge badge-outline text-black">Javascript</div>
      </section>
    </div>
  );
}
