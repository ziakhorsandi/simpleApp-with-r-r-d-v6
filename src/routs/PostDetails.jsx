import classes from './postDetails.module.css';
import Modal from '../components/Modal';
import { Link, useLoaderData } from 'react-router-dom';
const PostDetails = () => {
  const post = useLoaderData();
  if (!post) {
    return (
      <Modal>
        <main className={classes.container}>
          <h1>Could not find a post</h1>
          <p>
            <Link to='..'>Okay</Link>{' '}
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.container}>
        <p>{post.body}</p>
        <p>{post.author}</p>
      </main>
    </Modal>
  );
};

export default PostDetails;
export async function loader({ params }) {
  console.log('params', params);
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  const resData = await response.json();
  return resData.post;
}
