import React, { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from './components/Loader';
import LandingPageLayout from './layouts/Landing';
// import MainLayout from './layouts/Main';
import {
  AuthPage,
  HomePage,
  NotFoundPage,
  SubjectListPage,
  SubjectPage,
} from './pages';
import Main from './pages/Main/Main';

const MainLayout = lazy(() => import('./layouts/Main'));

const routes = [
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      { path: '/en', element: <Main /> },
      { path: '/auth', element: <AuthPage /> },
      { path: '*', element: <NotFoundPage /> },
      { path: '/', element: <Navigate to='/en' /> },
    ],
  },
  {
    path: '/en',
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      { path: '/app', element: <HomePage /> },
      { path: '/app/:slug', element: <SubjectPage /> },
      { path: '/subjects', element: <SubjectListPage /> },
      { path: '/en', element: <Navigate to='/home' /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export default routes;
