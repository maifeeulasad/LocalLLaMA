import React, { lazy, Suspense } from 'react';

const Page1luu7x2 = lazy(() => import('./Page'));

const LazyPage1luu7x2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luu7x2 />
  </Suspense>
);

export { LazyPage1luu7x2 };
