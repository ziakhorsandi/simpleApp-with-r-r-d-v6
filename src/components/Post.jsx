import { Link } from 'react-router-dom';
import classes from './post.module.css';
const Post = ({ id, name, desc }) => {
  return (
    <Link to={id}>
      <li className={classes.container}>
        <p>{name}</p>
        <p>{desc}</p>
      </li>
    </Link>
  );
};

export default Post;
