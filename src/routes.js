import React, { lazy, Suspense } from 'react';
// import { Navigate } from 'react-router-dom';
import Loader from './components/Loader';
import LandingPageLayout from './layouts/Landing';
import { MainPage, AuthPage, HomePage, NotFoundPage, SubjectListPage, SubjectPage, Instructor } from './pages';

const MainLayout = lazy(() => import('./layouts/Main'));

const routes = [
	{
		path: '/',
		element: <LandingPageLayout />,
		children: [
			{ path: '', element: <MainPage /> },
			{ path: '/auth', element: <AuthPage /> },
			{ path: '*', element: <NotFoundPage /> },
			// { path: '/', element: <Navigate to='/home' /> },
		],
	},
	{
		path: '/app',
		element: (
			<Suspense fallback={<Loader />}>
				<MainLayout />
			</Suspense>
		),
		children: [
			{ path: '', element: <HomePage /> },
			{ path: 'course/:slug', element: <SubjectPage /> },
			{ path: 'subjects', element: <SubjectListPage /> },
			{ path: '*', element: <NotFoundPage /> },
		],
	},
	{
		path: '/instructor',
		element: (
			<Suspense fallback={<Loader />}>
				<MainLayout />
			</Suspense>
		),
		children: [{ element: <Instructor /> }, { path: '*', element: <NotFoundPage /> }],
	},
];

export default routes;
