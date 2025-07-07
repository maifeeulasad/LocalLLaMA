import React, { lazy, Suspense } from 'react';

const Page1ltonwy = lazy(() => import('./Page'));

const LazyPage1ltonwy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltonwy />
  </Suspense>
);

export { LazyPage1ltonwy };
