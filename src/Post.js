import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <>
      <div className='flex flex-wrap mb-6'>
        <div className='grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto'>
          <div
            className='relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6'
            data-mdb-ripple='true'
            data-mdb-ripple-color='light'>
            <img
              src={"http://localhost:4000/" + cover}
              className='w-full'
              alt='Louvre'
            />
            <Link to={`/post/${_id}`}>
              <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'></div>
            </Link>
          </div>
        </div>

        <div className='grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto'>
          <Link className='text-lg font-bold mb-3' to={`/post/${_id}`}>
            {title}
          </Link>
          <p className='text-gray-500 mb-6'>
            <small>
              Published{" "}
              <time>{format(new Date(createdAt), "MMM d, yyyy")}</time> by{" "}
              <Link to={`/post/${_id}`} className='text-gray-900'>
                {author.username}
              </Link>
            </small>
          </p>
          <p className='text-gray-500'>{summary}</p>
        </div>
      </div>
    </>
  );
}
