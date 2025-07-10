import React, { lazy, Suspense } from 'react';

const Page1lvslsc = lazy(() => import('./Page'));

const LazyPage1lvslsc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvslsc />
  </Suspense>
);

export { LazyPage1lvslsc };
