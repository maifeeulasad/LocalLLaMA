import React, { lazy, Suspense } from 'react';

const Page1lx6yer = lazy(() => import('./Page'));

const LazyPage1lx6yer = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx6yer />
  </Suspense>
);

export { LazyPage1lx6yer };
