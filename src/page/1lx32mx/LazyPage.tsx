import React, { lazy, Suspense } from 'react';

const Page1lx32mx = lazy(() => import('./Page'));

const LazyPage1lx32mx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx32mx />
  </Suspense>
);

export { LazyPage1lx32mx };
