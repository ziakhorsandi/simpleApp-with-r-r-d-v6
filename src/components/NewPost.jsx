import { useState } from 'react';
import classes from './newPost.module.css';
const NewPost = ({ onCancel, onAddPost }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <form
      className={classes.form}
      onSubmit={(e) => {
        e.preventDefault();
        const postData = {
          body: desc,
          author: name,
        };
        onAddPost(postData);
        onCancel();
      }}
    >
      <div className={classes.subCont}>
        <label htmlFor='text'>description</label>
        <textarea
          rows={3}
          required
          id='text'
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
      </div>
      <div className={classes.subCont}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          required
          id='name'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className={classes.btns}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default NewPost;
