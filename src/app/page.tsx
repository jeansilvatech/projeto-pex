import React from "react";
import HomePage from "./home/page";
import Contacts from "@/components/Contatos";
import Products from "@/components/Produtos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <Products />
      <Contacts/>
      <Footer/>
    </div>
  );
}
