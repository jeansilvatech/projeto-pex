import DrawerAppBar from "@/components/MenuBar";
import React from "react";

const HomePage = ()=>{
    return(
        <div className="flex justify-center items-center w-screen h-lvh flex-wrap animate-enter">
            <DrawerAppBar />
            <div className="image_principal lg:w-1/2 lg:h-full w-full h-1/2 rounded-br-[100px]">
            </div>
            <div className="lg:w-1/2 lg:h-full w-full h-1/2 flex justify-center items-center">
                <div className="flex flex-col flex-nowrap"> 
                    <h1 className="lg:text-6xl text-4xl px-6 text-[#403d39] font-extralight uppercase z-10">Nossas <span className="font-light">lingeries</span> vão transformar a sua autoestima</h1>
                </div>
            </div>

        </div>
    )
}

export default HomePage;