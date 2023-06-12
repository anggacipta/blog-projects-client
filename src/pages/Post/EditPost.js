import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../../Editor";
import { UserContext } from "../../UserContext";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
    fetch("http://localhost:4000/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
      });
    });
  }, []);

  const username = userInfo?.username;

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    const response = await fetch("http://localhost:4000/post", {
      method: "PATCH",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  return (
    // <form onSubmit={updatePost}>
    //   <input
    //     type='title'
    //     placeholder={"Title"}
    //     value={title}
    //     onChange={(ev) => setTitle(ev.target.value)}
    //   />
    //   <input
    //     type='summary'
    //     placeholder={"Summary"}
    //     value={summary}
    //     onChange={(ev) => setSummary(ev.target.value)}
    //   />
    //   <input type='file' onChange={(ev) => setFiles(ev.target.files)} />
    //   <Editor onChange={setContent} value={content} />
    //   <button style={{ marginTop: "5px" }}>Update post</button>
    // </form>
    <>
      <div className='container mx-auto flex flex-wrap py-6'>
        <section className='w-full flex flex-col items-center px-3'>
          {username && (
            <form action='' onSubmit={updatePost}>
              <div className='space-y-12'>
                <div className='border-b border-gray-900/10 pb-12'>
                  <h2 className='text-3xl text-center font-semibold leading-7 text-gray-900'>
                    Edit Blog
                  </h2>

                  <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                    <div className='sm:col-span-4'>
                      <label
                        for='title'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        Title
                      </label>
                      <div className='mt-2'>
                        <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                          <input
                            type='title'
                            id='title'
                            value={title}
                            onChange={(ev) => setTitle(ev.target.value)}
                            className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                            placeholder='Create new Title'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='sm:col-span-4'>
                      <label
                        for='summary'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        Summary
                      </label>
                      <div className='mt-2'>
                        <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                          <input
                            type='summary'
                            id='summary'
                            value={summary}
                            onChange={(ev) => setSummary(ev.target.value)}
                            className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                            placeholder='Create new Summary'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='col-span-full'>
                      <label
                        for='cover-photo'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        Cover photo
                      </label>
                      <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                        <div className='text-center'>
                          <svg
                            className='mx-auto h-12 w-12 text-gray-300'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            aria-hidden='true'>
                            <path
                              fill-rule='evenodd'
                              d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                              clip-rule='evenodd'
                            />
                          </svg>
                          <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                            <label
                              for='file-upload'
                              className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'>
                              <span>Upload a file</span>
                              <input
                                id='file-upload'
                                type='file'
                                onChange={(ev) => setFiles(ev.target.files)}
                                className=''
                              />
                            </label>
                            <p className='pl-1'>or drag and drop</p>
                          </div>
                          <p className='text-xs leading-5 text-gray-600'>
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='sm:col-span-4'>
                      <label
                        for='summary'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        Content
                      </label>
                      <div className='mt-2'>
                        <Editor value={content} onChange={setContent} />
                      </div>
                    </div>
                  </div>
                  <button class='inline-block rounded bg-primbg my-4 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-accentbg hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
                    Update Post
                  </button>
                </div>
              </div>
            </form>
          )}
          {!username && <h1>Kamu tidak ter otentikasi</h1>}
        </section>
      </div>
    </>
  );
}
