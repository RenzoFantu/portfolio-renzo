import ClientButton from '@/components/boton'
import React from 'react'
import { Image } from '@nextui-org/react'
const page = () => {
  return (
    <div >
    <Image src='https://res.cloudinary.com/da2aauwq2/image/upload/v1713234733/Beard-Store/poavr6kp7q95l2boh9me.png' />
      <div className= 'flex text-center mx-auto m-6'>

      <ClientButton text="mi boton 1"/>
      <ClientButton text="hola hola" />
      </div>

    </div>
  )
}

export default page
