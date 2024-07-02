import classes from './mainHeader.module.css';
import { HiOutlineDocumentChartBar } from 'react-icons/hi2';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function MainHeader({ onCreatePost }) {
  return (
    <div className={classes.container}>
      <h2>
        <HiOutlineDocumentChartBar />
        React Poster
      </h2>
      <Link to='/new-post' className={classes.link} onClick={onCreatePost}>
        <button>
          <HiOutlineDocumentPlus />
          New Post
        </button>
      </Link>
    </div>
  );
}

export default MainHeader;
