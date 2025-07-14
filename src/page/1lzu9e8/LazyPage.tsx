import React, { lazy, Suspense } from 'react';

const Page1lzu9e8 = lazy(() => import('./Page'));

const LazyPage1lzu9e8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzu9e8 />
  </Suspense>
);

export { LazyPage1lzu9e8 };
