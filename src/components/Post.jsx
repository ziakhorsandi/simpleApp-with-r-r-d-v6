import classes from './post.module.css';
const Post = ({ name, desc }) => {
  return (
    <li className={classes.container}>
      <p>{name}</p>
      <p>{desc}</p>
    </li>
  );
};

export default Post;
