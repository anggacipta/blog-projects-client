import React from "react";
import { Modal, Ripple, Carousel, initTE } from "tw-elements";
import { useEffect } from "react";
import { useState } from "react";

const Aside = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    initTE({ Modal, Ripple, Carousel });
    fetch("http://localhost:4000/image").then((response) => {
      response.json().then((images) => {
        setImages(images);
      });
    });
  }, []);
  return (
    <>
      <aside className='w-full md:w-1/3 flex flex-col items-center px-3'>
        <div className='w-full bg-white shadow flex flex-col my-4 p-6'>
          <p className='text-xl font-semibold pb-5'>Cerita kita</p>
          <p className='pb-2'>
            Kami adalah website vblog. Kami menyediakan blog ini untuk komunitas
            vtuber agar mereka dapat berbagi cerita atau membuat blog. Blog ini
            bersifat gratis dan tidak perlu membayar apapun.
          </p>
          <a
            href='/about'
            className='w-full bg-primbg text-white font-bold text-sm uppercase rounded hover:bg-accentbg flex items-center justify-center px-2 py-3 mt-4'>
            Lebih tahu tentang kami
          </a>
        </div>

        <div className='w-full bg-white shadow flex flex-col my-4 p-6'>
          <p className='text-xl font-semibold pb-5'>Galeri</p>
          <div className='grid grid-cols-3 gap-3'>
            {images.map((image) => (
              <img
                className='hover:opacity-75 h-full'
                src={"http://localhost:4000/" + image.image}
              />
            ))}
          </div>

          <a
            href='/gallery'
            className='w-full bg-primbg text-whitebg font-bold text-sm uppercase rounded hover:bg-accentbg flex items-center justify-center px-2 py-3 mt-6'>
            <i className='fab fa-instagram mr-2'></i> Pergi ke Galeri
          </a>
        </div>
      </aside>
    </>
  );
};

export default Aside;
