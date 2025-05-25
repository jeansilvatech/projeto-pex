import DrawerAppBar from "@/components/MenuBar";
import React from "react";
import Image from "next/image";
import logoLK from '../../../public/logolk.png'

const HomePage = ()=>{
    return(
        <div className="flex justify-center items-center w-screen h-lvh flex-wrap animate-enter">
            <DrawerAppBar />
            <div className="image_principal lg:mt-[64px] mt-[55px] lg:w-1/2 lg:h-full w-full h-1/2 lg:rounded-br-[100px] rounded-br-4xl">
            </div>
            <Image className="absolute bg-white rounded-full lg:block hidden" unoptimized src={logoLK} width={150} height={150} alt=""/>
            <div className="lg:w-1/2 lg:h-full w-full h-1/2 flex justify-center items-center">
                <div className="flex flex-col flex-nowrap lg:w-1/2"> 
                    <h1 className="lg:text-5xl text-4xl px-6 text-[#403d39] font-extralight uppercase z-10">Nossas <span className="font-light">lingeries</span> vão transformar a sua autoestima</h1>
                </div>
            </div>

        </div>
    )
}

export default HomePage;