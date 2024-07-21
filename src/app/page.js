import ClientButton from '@/components/boton';
import React from 'react';
import { Image, Navbar } from '@nextui-org/react';
import Navbar1 from '@/components/navbar';
import Card1 from '@/components/card1';

const Page = ({url}) => {
  return (
    <>
      <div >
        <div className="flex justify-center text-center flex-wrap sm:w-full py-12">
          <div className="">
            <img
              className="h-auto w-96 rounded-full py-3 px-3"
              src="https://res.cloudinary.com/da2aauwq2/image/upload/v1721535473/epic_body_16_mddtpj.png"
              alt="renzo fantuzzi"
            />
          </div>
          <div className="flex flex-col px-5 justify-center">
            <h1 className="mt-3 text-3xl font-bold leading-10">Hola!</h1>
            <div className="flex flex-wrap justify-center">
              <h2 className="mt-2 text-center text-5xl font-extrabold leading-10 tracking-normal text-secondary px-3">
                Soy
              </h2>
              <h2 className="mt-2 text-center text-5xl font-extrabold leading-10 tracking-normal text-secondary">
                Renzo Fantuzzi
              </h2>
            </div>
            <h1 className="mt-2 text-3xl font-bold leading-10">Frontend Developer</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <h1 className='font-bold text-3xl py-5 px-5 text-center'>Aquí puedes ver algunos de mis proyectos</h1>
      </div>
      <div className='flex justify-center flex-wrap'>
      <Card1 url={'https://res.cloudinary.com/da2aauwq2/image/upload/v1721541689/limpiamos_tu_parecela_3840_x_2160_px_2_bkfz29.png'}/>
      <Card1 url={'https://res.cloudinary.com/da2aauwq2/image/upload/v1721540073/limpiamos_tu_parecela_3840_x_2160_px_l2koij.png'} />
      <Card1 url={'https://res.cloudinary.com/da2aauwq2/image/upload/v1721540289/limpiamos_tu_parecela_3840_x_2160_px_1_cjv6cy.png'} />
      </div>
      
    </>
  );
};

export default Page;


