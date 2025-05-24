'use client'
import React from "react";
import Image from "next/image";
const productList = ['body','corset', 'pijama', 'conjunto', 'calcinha', 'sexyshop']
const Products = ()=>{
    return(
        <div className="w-screen flex-wrap flex mt-9 p-9 justify-center items-center gap-2 animate-enter">
            <h2 className="w-full lg:text-5xl text-4xl uppercase font-light text-center">Nossos Produtos</h2>
            {
                productList.map((item:string, index:number)=>(
            <div key={index} className="lg:w-1/4 w-full h-96 my-6 rounded-t-2xl shadow-xl
                ">
                    <Image className="w-full h-9/12 object-cover 
                object-center 
                rounded-t-2xl
                z-10" src={`/${item}.webp`} width={1000} height={1000} alt=""/>
                <div className="flex justify-center items-center
                w-full h-1/4
                ">
                    <h3 className="text-[#403d39] text-2xl uppercase font-extralight">{item}</h3>
                </div>
                
            </div>
                ))
            }
            
        </div>
    )
}
export default Products;