import Contacts from '@/components/Contatos';
import Footer from '@/components/Footer';
import DrawerAppBar from '@/components/MenuBar';
import React from 'react';

const About = ()=>{
    return(
        <>
        <DrawerAppBar/>
        <div className='mt-[64px] w-screen lg:h-screen h-auto flex justify-start items-center flex-col'>
            <h2 className='text-4xl uppercase m-6'>Quem somos</h2>
                <div className='w-full h-1/2 flex justify-center items-center flex-col'>
                    <div className='lg:w-1/2 w-10/12 text-start'>
                    <p>A Lingeries da Ka nasceu do sonho de Karina: transformar a lingerie em um símbolo de autoestima, liberdade e poder feminino. Mais do que peças íntimas, oferecemos experiências. Cada detalhe, tecido e costura foi pensado para que você se sinta confiante, confortável e linda — por dentro e por fora.</p>
                    <p>Acreditamos que toda mulher merece se sentir especial todos os dias, e é por isso que criamos lingeries que valorizam todos os corpos, estilos e momentos. Da delicadeza ao impacto, temos peças para cada versão de você.</p>
                    <p>Seja bem-vinda ao nosso universo. Aqui, cada escolha é uma celebração da sua beleza.</p>
                </div>
                <div className='lg:w-1/2 w-10/12 my-6 flex flex-col text-start'>
                    <span>Com carinho,</span>
                    <span>Karina Silva</span>
                    <span>Fundadora da Lingeries da Ka</span>
                </div>

                </div>
                
        </div>
        <Contacts/>
        <Footer/>
        </>
    )
}
export default About;