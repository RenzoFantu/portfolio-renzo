import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { Image, Button } from '@nextui-org/react';  // Importar correctamente Image y Button

const Card1 = ({url}) => {  // Cambiar el nombre del componente a una letra mayúscula
  return (
    <div className='flex flex-wrap justify-center'>
    <Card className="mx-4 my-4 py-4 px-4 rounded-3xl bg-opacity-35 backdrop-blur-sm bg-danger hover:bg-danger w-max h-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start isFooterBlurred">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 ">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src={url}
          width={270}
        
          
          
        />
      </CardBody>
    </Card>
    

    </div>
    
  );
};

export default Card1;


