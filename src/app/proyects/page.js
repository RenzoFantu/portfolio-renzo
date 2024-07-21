import Card1 from '@/components/card1'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-wrap'>
      <Card1 url={'https://res.cloudinary.com/da2aauwq2/image/upload/v1721541689/limpiamos_tu_parecela_3840_x_2160_px_2_bkfz29.png'}/>
      <Card1 url={'https://res.cloudinary.com/da2aauwq2/image/upload/v1721540073/limpiamos_tu_parecela_3840_x_2160_px_l2koij.png'} />
      <Card1 url={'https://res.cloudinary.com/da2aauwq2/image/upload/v1721540289/limpiamos_tu_parecela_3840_x_2160_px_1_cjv6cy.png'} />
    </div>
  )
}

export default page
