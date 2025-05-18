import React from "react";
import { Instagram, WhatsApp, Pix } from "@mui/icons-material";
const Contacts = ()=>{
    return(
        <div className="w-screen h-dvh flex justify-center items-center">
            <div className="w-4/5 h-5/6 bg-[#C90456] flex justify-center items-center flex-wrap shadow-2xl">
                <div className="lg:h-full h-3/4 lg:w-3/4 w-full pl-8 flex justify-center items-start flex-col text-white">
                <h2 className="uppercase lg:text-6xl text-3xl mb-2">Contato</h2>
                <p className="lg:w-1/2 w-11/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Inventore sint culpa veritatis, iure iste fugit quod fuga 
                    voluptates tempore molestias itaque consequuntur dolore magni dolorem mollitia nemo 
                    ullam perspiciatis illo?</p>
                <div className="w-1/2 h-0.5 my-4 bg-white"></div>
                <h3 className="lg:text-5xl text-2xl">macre@macre.com</h3>
                <div className="mt-2">
                    <button className="mr-2">
                        <Instagram fontSize="large"/>
                    </button>
                     <button>
                        <WhatsApp fontSize="large" />
                    </button>
                </div>
                </div>
                <div id="contatos" className="lg:w-1/4 w-full lg:h-full h-1/4 bg-[#F2F2F2] text-[#C90456] flex justify-center items-center flex-col">
                    <h2 className="uppercase lg:text-6xl text-3xl text-center mb-2">Para doações</h2>
                    <Pix/>
                </div>
            </div>

        </div>
    )
}
export default Contacts;