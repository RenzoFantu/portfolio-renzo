import Card1 from '@/components/card1'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-wrap px-3 py-3 justify-center'>
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
  )
}

export default page
