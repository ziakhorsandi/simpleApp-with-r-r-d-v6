import Post from './Post';
import classes from './postList.module.css';
import { useLoaderData } from 'react-router-dom';

const PostList = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.container}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              name={post.author}
              desc={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div>
          <h2>There is no posts yet.</h2>
          <p>Start adding sum!!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
