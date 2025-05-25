import React from "react";
import { Instagram, WhatsApp } from "@mui/icons-material";
import logoLK from '../../../public/logolk.png'
import Image from "next/image";
const Contacts = ()=>{
    return(
        <div id="Contato" className="w-screen h-dvh flex justify-center items-center">
            <div className="w-4/5 h-5/6 bg-[#403d39] flex justify-center items-center flex-wrap shadow-2xl">
                <div className="lg:h-full h-3/4 lg:w-3/4 w-full pl-8 flex justify-center items-start flex-col text-white">
                <h2 className="uppercase lg:text-6xl text-3xl mb-2">Contato</h2>
                <p className="lg:w-1/2 w-11/12 lg:text-2xl text-sm">Precisa de ajuda ou quer saber mais sobre nossos produtos?</p>
                <p className="lg:w-1/2 w-11/12 lg:text-2xl text-sm">Entre em contato conosco</p>
                <div className="w-1/2 h-0.5 my-4 bg-white"></div>
                <h3 className="lg:text-4xl text-sm">contato.ligeriesdaka@gmail.com</h3>
                <div className="mt-2">
                    <a className="mr-2" href="https://www.instagram.com/lingeries.da.ka" target="_blank">
                        <Instagram fontSize="large"/>
                    </a>
                     <a href="https://api.whatsapp.com/send/?phone=5531995084186" target="_blank">
                        <WhatsApp fontSize="large" />
                    </a>
                </div>
                </div>
                <div id="contatos" className="lg:w-1/4 w-full lg:h-full h-1/4 bg-[#F2F2F2] text-[#C90456] flex justify-center items-center flex-col">
                    <Image unoptimized src={logoLK} width={200} height={200} alt=""/>
                </div>
            </div>

        </div>
    )
}
export default Contacts;