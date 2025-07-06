import React, { lazy, Suspense } from 'react';

const Page1lsxfpt = lazy(() => import('./Page'));

const LazyPage1lsxfpt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsxfpt />
  </Suspense>
);

export { LazyPage1lsxfpt };
