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
            <h1 className="mt-3 text-3xl font-bold">Hola!</h1>
            <div className="flex flex-wrap justify-center">
              <h2 className="mt-2 text-center text-5xl font-extrabold leading-10 tracking-normal text-secondary px-3">
                Soy
              </h2>
              <h2 className="mt-2 text-center text-5xl font-extrabold leading-10 tracking-normal text-secondary">
                Renzo Fantuzi
              </h2>
            </div>
            <h1 className="mt-2 text-3xl font-bold">Frontend Developer!</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center flex-wrap'>
      <Card1 url={'https://nextui.org/images/hero-card-complete.jpeg'}/>
      <Card1/>
      <Card1/>
      </div>
      
    </>
  );
};

export default Page;


