import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePages from './Pages/homePages';
import AboutPages from './Pages/aboutPages';
import ProjectPages from './Pages/projectPages';
import ContactPages from './Pages/contactPages';
import DetailProject from './Pages/detailProject';
import DetailExperience from './Pages/detailExperience';
import { ThemeProvider } from './context/ThemeContext';
import Sidenav from './components/Layouts/Sidenav';
import useResizer from './hooks/useResizer';
import Mobilenav from './components/Layouts/Mobilenav';
import './index.css';

const App = () => {
  const [isSidenavReady, setIsSidenavReady] = useState(false);
  const isMobile = useResizer();

  useEffect(() => {
    setIsSidenavReady(true);
  }, []);

  const Layout = ({ children }) => (
    <div>
      {isMobile && isSidenavReady && <Mobilenav />}
      {!isMobile && isSidenavReady && <Sidenav />}
      <main>{children}</main>
    </div>
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <HomePages />
        </Layout>
      ),
    },
    {
      path: '/about',
      element: (
        <Layout>
          <AboutPages />
        </Layout>
      ),
    },
    {
      path: '/detailexperience/:id',
      element: (
        <Layout>
          <DetailExperience />
        </Layout>
      ),
    },
    {
      path: '/project',
      element: (
        <Layout>
          <ProjectPages />
        </Layout>
      ),
    },
    {
      path: '/detailproject/:id',
      element: (
        <Layout>
          <DetailProject />
        </Layout>
      ),
    },
    {
      path: '/contact',
      element: (
        <Layout>
          <ContactPages />
        </Layout>
      ),
    },
  ]);

  return (
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);
