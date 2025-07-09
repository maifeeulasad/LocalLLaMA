import React, { lazy, Suspense } from 'react';

const Page1lvc2nj = lazy(() => import('./Page'));

const LazyPage1lvc2nj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvc2nj />
  </Suspense>
);

export { LazyPage1lvc2nj };
