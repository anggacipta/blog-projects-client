import React from "react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const AsideBlog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <aside className='w-full md:w-1/3 flex flex-col items-center px-3'>
      <div className='w-full bg-white shadow flex flex-col my-4 p-6'>
        <p className='text-xl font-semibold pb-5'>Cerita kami</p>
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
        <p className='text-xl font-semibold pb-5'>Blog</p>
        {posts.map(
          (post, index) =>
            index < 2 && (
              <div
                class='relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg py-4'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'>
                <img
                  src={"http://localhost:4000/" + post.cover}
                  class='w-full'
                />
                <div class='text-black m-6'>
                  <Link to={`/post/${post._id}`} class='font-bold text-lg mb-3'>
                    {post.title}
                  </Link>
                  <p>
                    <small>
                      Published{" "}
                      <u>
                        <time>
                          {format(new Date(post.createdAt), "MMM d, yyyy")}
                        </time>
                      </u>{" "}
                      by {post.author.username}
                    </small>
                  </p>
                </div>
              </div>
            )
        )}

        <a
          href='/'
          className='w-full bg-primbg text-whitebg font-bold text-sm uppercase rounded hover:bg-accentbg flex items-center justify-center px-2 py-3 mt-6'>
          <i className='fab fa-instagram mr-2'></i> Pergi ke blog
        </a>
      </div>
    </aside>
  );
};

export default AsideBlog;
