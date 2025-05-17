import DrawerAppBar from "@/components/MenuBar";
import React from "react";

const HomePage = ()=>{
    return(
        <div className="flex justify-center items-center w-screen h-screen flex-wrap">
            <DrawerAppBar/>
            <div className="image_principal lg:w-1/2 lg:h-full w-full h-1/2">
            </div>
            <div className="lg:w-1/2 lg:h-full w-full h-1/2 flex justify-center items-center">
                <div> 
                    <h2 className="lg:text-8xl text-4xl text-[#C90456] uppercase font-extralight"><span className="font-bold">M</span>ais</h2>
                    <h2 className="lg:text-8xl text-4xl text-[#C90456] uppercase font-extralight"><span className="font-bold">A</span>mor</h2>
                    <h2 className="lg:text-8xl text-4xl text-[#C90456] uppercase font-extralight"><span className="font-bold">C</span>ompaixão</h2>
                    <h2 className="lg:text-8xl text-4xl text-[#C90456] uppercase font-extralight"><span className="font-bold">R</span>espeito e</h2>
                    <h2 className="lg:text-8xl text-4xl text-[#C90456] uppercase font-extralight"><span className="font-bold">E</span>mpatia</h2>
                </div>
            </div>

        </div>
    )
}

export default HomePage;