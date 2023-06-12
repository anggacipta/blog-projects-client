import { formatISO9075 } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import Aside from "../../Aside";
import logo from "../../logo-vblog.png";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const [commentInfo, setCommentInfo] = useState([]);
  const [commentSumInfo, setCommentSumInfo] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
    fetch("http://localhost:4000/comment/" + id).then((response) => {
      response.json().then((commentInfo) => {
        setCommentInfo(commentInfo);
      });
    });
    fetch("http://localhost:4000/comment/sum/" + id).then((response) => {
      response.json().then((commentSumInfo) => {
        setCommentSumInfo(commentSumInfo);
      });
    });
  }, []);

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/post/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  async function createNewComment(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/comment/" + id, {
        name,
        comment,
      });
      window.location.assign("http://localhost:3000/post/" + id);
    } catch (error) {
      console.log(error);
    }
  }

  if (!postInfo) return "";

  return (
    <div class='mx-auto flex flex-wrap py-6'>
      <section class='w-full md:w-2/3 flex flex-col items-center px-3'>
        <article class='flex flex-col shadow my-4'>
          <a href='#' class='hover:opacity-75'>
            <img src={`http://localhost:4000/${postInfo.cover}`} className='' />
          </a>
          <div class='bg-white flex flex-col justify-start p-6'>
            {userInfo.id === postInfo.author._id && (
              <div className='edit-row'>
                <Link
                  to={`/edit/${postInfo._id}`}
                  className='pointer-events-auto ml-8 rounded-md bg-primbg px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-accentbg'>
                  Edit this post
                </Link>
                <Link
                  to={"/"}
                  onClick={() => deletePost(postInfo._id)}
                  className='pointer-events-auto ml-8 rounded-md bg-red-500 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-red-700'>
                  Delete this post
                </Link>
              </div>
            )}
            <a href='#' class='text-3xl font-bold hover:text-gray-700 pb-4'>
              {postInfo.title}
            </a>
            <p class='text-sm pb-8'>
              By{" "}
              <a href='#' class='font-semibold hover:text-gray-800'>
                {postInfo.author.username}
              </a>
              , Published on{" "}
              <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            </p>
            {/* <h1 class='text-2xl font-bold pb-3'>Introduction</h1> */}
            <p
              class='pb-3'
              dangerouslySetInnerHTML={{ __html: postInfo.content }}></p>
          </div>
        </article>
        <form
          class='w-full max-w-xl bg-white rounded-lg px-4 pt-2'
          onSubmit={createNewComment}>
          <div class='flex flex-wrap -mx-3 mb-6'>
            <h2 class='px-4 pt-3 pb-2 text-gray-800 text-lg'>
              Add a new comment
            </h2>
            <div class='w-full md:w-full px-3 mb-2 mt-2'>
              <input
                type='name'
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                class='bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
                placeholder='Your name'
                required
              />
            </div>
            <div class='w-full md:w-full px-3 mb-2 mt-2'>
              <textarea
                class='bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
                value={comment}
                onChange={(ev) => setComment(ev.target.value)}
                placeholder='Type Your Comment'
                required></textarea>
            </div>
            <div class='w-fullflex items-start md:w-full px-3'>
              <div class='-mr-1'>
                <button class='bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100'>
                  Create Comment
                </button>
              </div>
            </div>
          </div>
        </form>
        <section class='mb-32 text-gray-800'>
          {commentSumInfo.map((commentsum) => (
            <h5 class='text-xl font-semibold text-center mb-10 md:mb-6'>
              Comments: {commentsum.num_tutorial}
            </h5>
          ))}

          {/* <!-- Comment --> */}
          {commentInfo.map((comment) => (
            <div class='flex flex-wrap mb-12 md:mb-0'>
              <div class='grow-0 shrink-0 basis-auto w-2/12'>
                <img
                  // src='https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg'
                  src={logo}
                  class='w-full shadow-lg rounded-lg mb-6'
                  alt=''
                />
              </div>

              <div class='grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6'>
                <p class='font-semibold mb-3'>{comment.name}</p>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </section>
      </section>

      <Aside />
    </div>
  );
}
