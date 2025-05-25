import React from "react";
import logoLK from '../../../public/logolk.png'
import Image from "next/image";
const Footer = ()=>{
    return(
        <div className="bg-[#F2F2F2] w-full h-40 flex justify-center items-center flex-col">
            <Image unoptimized src={logoLK} width={70} height={70} alt=""/>
            <span className="font-light text-sm">&copy; 2025 Lingeries da Ka. Todos os direitos reservados.</span>
            <p className="font-light text-xs">desenvolvido por Jean Silva</p>
        </div>
    )
}

export default Footer;