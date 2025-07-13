import React, { lazy, Suspense } from 'react';

const Page1lyl697 = lazy(() => import('./Page'));

const LazyPage1lyl697 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyl697 />
  </Suspense>
);

export { LazyPage1lyl697 };
