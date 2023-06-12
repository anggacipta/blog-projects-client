import { useEffect, useState } from "react";
import Post from "../Post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      <section class='mb-32 text-gray-800 text-center md:text-left py-4 px-4'>
        <h2 class='text-3xl font-bold mb-12 text-center'>Blog terbaru</h2>
        <div class='flex flex-wrap mb-6'>
          {posts.length > 0 && posts.map((post) => <Post {...post} />)}
        </div>
      </section>
    </>
  );
}
