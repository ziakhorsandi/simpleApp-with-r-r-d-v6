import classes from './newPost.module.css';
import Modal from '../components/Modal';
import { Form, Link, redirect } from 'react-router-dom';
const NewPost = () => {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <div className={classes.subCont}>
          <label htmlFor='text'>description</label>
          <textarea name='body' rows={3} required id='text'></textarea>
        </div>
        <div className={classes.subCont}>
          <label htmlFor='name'>Name</label>
          <input name='author' type='text' required id='name' />
        </div>
        <div className={classes.btns}>
          <Link to='..'>
            <button>Cancel</button>
          </Link>
          <button type='submit'>Submit</button>
        </div>
      </Form>
    </Modal>
  );
};

export default NewPost;
export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: { 'Content-Type': 'application/json' },
  });
  return redirect('/');
}
