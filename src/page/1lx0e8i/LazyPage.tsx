import React, { lazy, Suspense } from 'react';

const Page1lx0e8i = lazy(() => import('./Page'));

const LazyPage1lx0e8i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx0e8i />
  </Suspense>
);

export { LazyPage1lx0e8i };
