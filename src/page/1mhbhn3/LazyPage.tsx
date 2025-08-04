import React, { lazy, Suspense } from 'react';

const Page1mhbhn3 = lazy(() => import('./Page'));

const LazyPage1mhbhn3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhbhn3 />
  </Suspense>
);

export { LazyPage1mhbhn3 };
