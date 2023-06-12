import React from "react";
import { Modal, Ripple, Carousel, initTE } from "tw-elements";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

initTE({ Modal, Ripple, Carousel });

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const { id } = useParams();
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
      <h1 className='text-center text-4xl py-4 font-bold'>Galeri</h1>
      <div class='my-8 px-6 mx-auto'>
        <section class='mb-32 text-gray-800'>
          <div class='grid lg:grid-cols-3 gap-6'>
            {images.map((image) => (
              <div
                class='zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover'
                data-mdb-ripple='true'
                data-mdb-ripple-color='dark'>
                <img
                  src={"http://localhost:4000/" + image.image}
                  class='w-full h-full transition duration-300 ease-linear align-middle'
                />
                <Link to={`/gallery/${image._id}`}>
                  <div class='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed'>
                    <div class='flex justify-start items-end h-full'>
                      <h5 class='text-lg font-bold text-white m-6'>
                        {image.title}
                      </h5>
                    </div>
                  </div>
                  <div class='hover-overlay'>
                    <div class='mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default GalleryPage;
