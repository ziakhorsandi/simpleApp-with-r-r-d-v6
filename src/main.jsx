import React from 'react';
import ReactDOM from 'react-dom/client';
import Posts, { loader as postsLoader } from './routs/Posts.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './routs/RootLayout.jsx';
import NewPost, { action as newPostAction } from './routs/NewPost.jsx';
import PostDetails, {
  loader as postDetailsLoader,
} from './routs/PostDetails.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <RootLayout />,
          children: [
            {
              path: '/',
              element: <Posts />,
              loader: postsLoader,
              children: [
                {
                  path: '/new-post',
                  action: newPostAction,
                  element: <NewPost />,
                },
                {
                  path: '/:id',
                  loader: postDetailsLoader,
                  element: <PostDetails />,
                },
              ],
            },
          ],
        },
      ])}
    />
  </React.StrictMode>
);
