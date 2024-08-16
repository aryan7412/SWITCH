import React from 'react';
import Card from './Card';
import Heading from '../Heading';

function Gallery({ Photos }) {
  return (
    <div>
    <div className='mx-5'>
      <Heading>Gallery</Heading>
      <p className="text-center font-extralight pb-10">Images that tell a story</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 ml-2 mr-2 items-center overflow-hidden">
        {Photos.map((pht, index) => (
          <Card key={index}>
            <div className="mx-1 mb-4 overflow-hidden">
              <img
                className="transition hover:scale-110 object-cover w-full h-48 sm:h-64"
                src={pht.image}
                alt={`Gallery image ${index + 1}`}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Gallery;