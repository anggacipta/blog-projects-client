import React from "react";
import { formatISO9075 } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import AsideBlog from "../../AsideBlog";

const GallerySingle = () => {
  const [imageInfo, setImageInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/image/${id}`).then((response) => {
      response.json().then((imageInfo) => {
        setImageInfo(imageInfo);
      });
    });
  }, []);

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/image/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (!imageInfo) return "";

  return (
    <div class='mx-auto flex flex-wrap py-6'>
      <section class='w-full md:w-2/3 flex flex-col items-center px-3'>
        <article class='flex flex-col shadow my-4'>
          <a href='#' class='hover:opacity-75'>
            <img
              src={`http://localhost:4000/${imageInfo.image}`}
              className=''
            />
          </a>
          {userInfo.id == imageInfo.author._id && (
            <div className='edit-row py-4 px-4'>
              <Link
                to={`/editgallery/${imageInfo._id}`}
                className='pointer-events-auto ml-8 rounded-md bg-primbg px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-accentbg'>
                Edit this image
              </Link>
              <Link
                to={"/gallery"}
                onClick={() => deletePost(id)}
                className='pointer-events-auto ml-8 rounded-md bg-red-500 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-red-700'>
                Delete this image
              </Link>
            </div>
          )}
          <div class='bg-white flex flex-col justify-start p-6'>
            <a href='#' class='text-3xl font-bold hover:text-gray-700 pb-4'>
              {imageInfo.title}
            </a>
            <p href='#' class='text-md pb-8'>
              Published on{" "}
              <time>{formatISO9075(new Date(imageInfo.createdAt))}</time>
            </p>
            <p className='text-md text black'>Art by: {imageInfo.art}</p>
            <p className='text-md text black'>
              Vtuber name: {imageInfo.vtubername}
            </p>
            <Link to={imageInfo.vtubersource} className='text-md text black'>
              Vtuber source: {imageInfo.vtubersource}
            </Link>
            <Link to={imageInfo.link}>Link art: {imageInfo.link}</Link>
            {/* <h1 class='text-2xl font-bold pb-3'>Introduction</h1> */}
          </div>
        </article>
      </section>

      <AsideBlog />
    </div>
  );
};

export default GallerySingle;
