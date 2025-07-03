import React, { lazy, Suspense } from 'react';

const Page1lqi5q0 = lazy(() => import('./Page'));

const LazyPage1lqi5q0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqi5q0 />
  </Suspense>
);

export { LazyPage1lqi5q0 };
