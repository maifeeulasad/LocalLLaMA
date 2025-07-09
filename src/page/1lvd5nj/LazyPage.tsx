import React, { lazy, Suspense } from 'react';

const Page1lvd5nj = lazy(() => import('./Page'));

const LazyPage1lvd5nj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvd5nj />
  </Suspense>
);

export { LazyPage1lvd5nj };
