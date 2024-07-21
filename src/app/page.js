import React from 'react';
import Card1 from '@/components/card1';

const Page = () => {
  return (
    <>
      <div>
        <div className="flex justify-center text-center flex-wrap sm:w-full py-12">
          <div className="">
            <img
              className="h-auto w-64 sm:w-96 rounded-full py-3 px-3"
              src="https://res.cloudinary.com/da2aauwq2/image/upload/v1721535473/epic_body_16_mddtpj.png"
              alt="renzo fantuzzi"
            />
          </div>
          <div className="flex flex-col px-5 justify-center">
            <h1 className="mt-3 text-2xl sm:text-3xl font-bold leading-10 text-white">Hola!</h1>
            <div className="flex flex-wrap justify-center">
              <h2 className="mt-2 text-center text-3xl sm:text-5xl font-extrabold leading-10 tracking-normal text-secondary px-3">
                Soy
              </h2>
              <h2 className="mt-2 text-center text-3xl sm:text-5xl font-extrabold leading-10 tracking-normal text-secondary">
                Renzo Fantuzzi
              </h2>
            </div>
            <h1 className="mt-2 text-2xl sm:text-3xl font-bold leading-10 text-white">Frontend Developer</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <h1 className='font-bold text-2xl sm:text-3xl py-5 px-5 text-center text-white'>Aquí puedes ver algunos de mis proyectos</h1>
      </div>
      <div className='flex justify-center flex-wrap'>
        <Card1 
          href='https://proyecto-barba-react-qzu3d45z0-renzos-projects-db2a62c7.vercel.app/' 
          url='https://res.cloudinary.com/da2aauwq2/image/upload/v1721541689/limpiamos_tu_parecela_3840_x_2160_px_2_bkfz29.png' 
          
          h4Href='https://github.com/RenzoFantu/proyecto-barba-react' 
          h4Text='Código en GitHub' 
        />
        <Card1 
          href='https://renzofantu.github.io/limpia-tu-espacio2/' 
          url='https://res.cloudinary.com/da2aauwq2/image/upload/v1721540073/limpiamos_tu_parecela_3840_x_2160_px_l2koij.png' 
          h4Href='https://github.com/RenzoFantu/limpia-tu-espacio2' 
          h4Text='Código en GitHub' 
        />
          <Card1 
            href='https://renzofantu.github.io/Repositorio-2/' 
            url='https://res.cloudinary.com/da2aauwq2/image/upload/v1721581332/limpiamos_tu_parecela_1_ekz9nw.png'  
            h4Href='https://github.com/RenzoFantu/Repositorio-2' 
            h4Text='Código en GitHub'
          />
        <Card1 
          href='https://renzofantu.github.io/Pokemon-Api/' 
          url='https://res.cloudinary.com/da2aauwq2/image/upload/v1721540289/limpiamos_tu_parecela_3840_x_2160_px_1_cjv6cy.png'  
          h4Href='https://github.com/RenzoFantu/Pokemon-Api' 
          h4Text='Código en GitHub'
        />
      </div>
    </>
  );
};

export default Page;






