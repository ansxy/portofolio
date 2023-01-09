export default function Skills(){
    return (
        <div className="m-10 h-[48rem] flex">
        <section className="flex w-full flex-col items-start">
            <div className="w-full flex flex-row-reverse">
                <p className="p-5 text-3xl font-bold border-2 border-black text-black">SKILL</p>
                <div className="border-b-2 border-black w-full"></div>
            </div>
            <div className=" h-full p-10 w-full mt-5 flex">
                <section className="flex flex-col flex-grow-0 text-black">
                        <p className="text-lg font-medium">
                            Hiiii! I'm Fadil, and i calling my self a Web Developer
                        </p>
                        <span className="w-1/2 font-light leading-snug">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                </section>
                <section className="flex w-1/2 justify-center text-black">
                    <ul className="flex gap-10 flex-col p-10">
                        <li className="">
                            <div className="collapse">
                                <input type="checkbox"/>
                                <p className="collapse-title font-bold flex flex-col">SMK MUHAMMADIYAH 1<span className="font-light">Teknik Instalasi Tenaga Listrik</span></p>
                                <p className="collapse-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </li>
                        <li className="">
                            <div className="collapse">
                                <input type="checkbox"/>
                                <p className="collapse-title font-bold flex flex-col">INSTITUT TEKNOLOGI KALIMANTAN<span className="font-light">Informatika</span></p>
                                <p className="collapse-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    </div>
    )
}