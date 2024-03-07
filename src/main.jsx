import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePages from './Pages/homePages';
import AboutPages from './Pages/aboutPages';
import './index.css';
import ExperiencePages from './Pages/experiencePages';
import ProjectPages from './Pages/projectPages';
import ContactPages from './Pages/contactPages';
import DetailProject from './Pages/detailProject';
import DetailExperience from './Pages/detailExperience';
import { ThemeProvider } from './context/ThemeContext';

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
    path: '/detailexperience/:id',
    element: <DetailExperience />,
  },
  {
    path: '/project',
    element: <ProjectPages />,
  },
  {
    path: '/detailproject/:id',
    element: <DetailProject />,
  },
  {
    path: '/contact',
    element: <ContactPages />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
