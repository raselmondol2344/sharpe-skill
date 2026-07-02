import React from 'react';
import Image from 'next/image';
import { Card, Chip } from '@heroui/react';
import { Button } from '@heroui/react';
import Link from 'next/link';


const PhotoCard = ({photo}) => {
    //console.log(photo);
    return (
        <div>
    {/* <Card className="w-64 border rounded-xl overflow-hidden">
  <div className="elative w-full h-52">
    <Image
      src={photo.image}
      alt={photo.title}
      fill
      className="rounded-xl object-cover" />
      <Chip size='sm' className=' absolute right-2 mt-2'>{photo.category}</Chip>
  </div>


  <div className="card-body items-center text-center space-y-3">
    <h2 className="card-title flex justify-start font-semibold text-lg">{photo.title}</h2>
    <p className=' font-semibold'> <span className='font-bold'>Instructor</span>  :  {photo.instructor}</p>
    <p className=' font-semibold'> <span className='font-bold'>Ratting</span> : {photo.rating}</p>
    
   

  </div>
  <Link href={'/'}>
  <Button variant='outline' className={"w-full "}>Details</Button>
  </Link>
</Card> */}


<Card className=" p-3 rounded-xl space-y-2 max-w-[260px] mx-auto overflow-hidden shadow-2xl bg-slate-200">
  <div className="relative w-full h-56">
    <Image
      src={photo.image}
      alt={photo.title}
      fill
      className="object-cover rounded-2xl"
    />
    <Chip size="sm" className="absolute top-2 right-2">
      {photo.category}
    </Chip>
  </div>

  <div className="px-3 py-2 text-center space-y-2">
    <h2 className="font-semibold text-lg line-clamp-1">
      {photo.title}
    </h2>

    <p className="font-semibold text-sm">
      <span className="font-bold">Instructor:</span> {photo.instructor}
    </p>

    <p className="font-semibold text-sm">
      <span className="font-bold">Rating:</span> {photo.rating}
    </p>
  </div>

  <Link href="/">
    <Button variant='outline' className="w-full rounded-xl border-gray-400">
      Details
    </Button>
  </Link>
</Card>
            
        </div>
    );
};

export default PhotoCard;