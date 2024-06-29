import classes from './mainHeader.module.css';
import { HiOutlineDocumentChartBar } from 'react-icons/hi2';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';

function MainHeader({ onCreatePost }) {
  return (
    <div className={classes.container}>
      <h2>
        <HiOutlineDocumentChartBar />
        React Poster
      </h2>
      <button onClick={onCreatePost}>
        <HiOutlineDocumentPlus />
        New Post
      </button>
    </div>
  );
}

export default MainHeader;
