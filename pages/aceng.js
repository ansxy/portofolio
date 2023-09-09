import Image from "next/image";
import { useState } from "react";

export default function AcengCult () {
    const [counter ,setCounter] = useState(0)
    return <div className="w-[100vw] h-[100vh] bg-black flex  flex-col">
        <div className="p-14 flex flex-col items-center justify-center gap-5">
            <h1 className="font-fireCode font-bold text-4xl text-red-700 animate-pulse">
                MEOW MEW MEW......
            </h1>
            <div className="w-[20rem] h-[20rem] relative">
                <Image
                        src={'/image/aceng2.png'}
                        alt="profile"
                        fill
                        className="bg-clip-content"
                    />
            </div>
            <button className="p-5 animate-pulse hover:animate-none bg-red-700 text-xl font-bold text-white" onClick={() => setCounter(counter + 1)}>Worship Aceng</button>
            <p>Aceng Cult Member <span>{counter}</span></p>
        </div>
    </div>
}