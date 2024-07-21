import React from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import Link from 'next/link';

const Card1 = ({ url, href, smallHref, smallText, h4Href, h4Text }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      <Card className="mx-4 my-4 py-4 px-4 rounded-3xl bg-opacity-35 backdrop-blur-sm bg-danger hover:bg-danger w-max h-auto">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start isFooterBlurred">
          {href && (
            <Link href={href} className="text-tiny uppercase font-bold text-white hover:text-secondary">
              Ver Proyecto
            </Link>
          )}
          {smallHref ? (
            <Link href={smallHref} className="text-default-500 block mt-1 text-sm text-white hover:text-secondary">
              {smallText}
            </Link>
          ) : (
            <small className="text-default-500 hover:text-secondary text-white" >{smallText}</small>
          )}
          {h4Href ? (
            <Link href={h4Href} className="font-bold text-large text-white hover:text-secondary">
              {h4Text}
            </Link>
          ) : (
            <h4 className="font-bold text-large hover:text-secondary text-white">{h4Text}</h4>
          )}
        </CardHeader>
        <CardBody className="overflow-visible py-2">
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





