import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import StudentAttendance from './pages/StudentAttendance';
import GenericPage from './pages/GenericPage';
import StaffPage from './pages/StaffPage';
import GalleryPage from './pages/GalleryPage';
import Library from './pages/Library';
import Playground from './pages/Playground';
import DocumentRedirect from './pages/DocumentRedirect';
import ExtendedProfile from './pages/ExtendedProfile';

// Placeholder for other pages
const Placeholder = ({ title }) => (
  <div className="container mx-auto py-20 px-4 text-center">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p>This page is under construction.</p>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contacts',
        element: <Contact />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'news/:id',
        element: <NewsDetail />,
      },
      {
        path: 'studentattendance',
        element: <StudentAttendance />,
      },
      // Specific Pages
      {
        path: 'teaching',
        element: <StaffPage type="teaching" />,
      },
      {
        path: 'nonteaching',
        element: <StaffPage type="non-teaching" />,
      },
      {
        path: 'gallery',
        element: <GalleryPage type="photo" />,
      },
      {
        path: 'video',
        element: <GalleryPage type="video" />,
      },
      {
        path: 'library',
        element: <Library />,
      },
      {
        path: 'playground',
        element: <Playground />,
      },
      // NAAC Extended Profile
      {
        path: 'extended-profile',
        element: <ExtendedProfile />,
      },
      // Documents route - redirect to static files
      {
        path: 'documents/*',
        element: <DocumentRedirect />,
      },
      // Generic Page Handler (Must be last before 404)
      {
        path: ':pageId',
        element: <GenericPage />,
      },
      {
        path: '*',
        element: <Placeholder title="Coming Soon" />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
