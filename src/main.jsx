import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePages from './Pages/homePages';
import AboutPages from './Pages/aboutPages';
import './index.css';
import ExperiencePages from './Pages/experiencePages';
import ProjectPages from './Pages/projectPages';
import ContactPages from './Pages/contactPages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePages />,
  },
  {
    path: '/about',
    element: <AboutPages />,
  },
  {
    path: '/experience',
    element: <ExperiencePages />,
  },
  {
    path: '/project',
    element: <ProjectPages />,
  },
  {
    path: '/contact',
    element: <ContactPages />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
