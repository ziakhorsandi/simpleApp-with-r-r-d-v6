import { useState } from 'react';
import './App.css';
import MainHeader from './components/MainHeader';
import PostList from './components/PostList';

function App() {
  const [modalIsVisiable, setModalIsVisiable] = useState(false);

  return (
    <>
      <MainHeader onCreatePost={() => setModalIsVisiable(true)} />
      <main>
        <PostList
          modalIsVisiable={modalIsVisiable}
          onCancel={() => {
            setModalIsVisiable(false);
          }}
        />
      </main>
    </>
  );
}

export default App;
