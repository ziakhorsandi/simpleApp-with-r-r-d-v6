import { useEffect, useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from './postList.module.css';
import Modal from './Modal';
import Loading from './Loading';

const PostList = ({ modalIsVisiable, onCancel }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:8080/posts');
        const resData = await response.json();
        setPosts(resData.posts);
        setIsLoading(false);
      } catch (error) {
        console.log('error.message', error.message);
        throw new Error(error);
      }
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {modalIsVisiable && (
        <Modal hideModal={onCancel}>
          <NewPost onCancel={onCancel} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isLoading && posts.length > 0 && (
        <ul className={classes.container}>
          {posts.map((post) => (
            <Post key={post.author} name={post.author} desc={post.body} />
          ))}
        </ul>
      )}
      {!isLoading && posts.length === 0 && (
        <div>
          <h2>There is no posts yet.</h2>
          <p>Start adding sum!!</p>
        </div>
      )}
      {isLoading && <Loading />}
    </>
  );
};

export default PostList;
