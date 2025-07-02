import React, { lazy, Suspense } from 'react';

const Page1lpl656 = lazy(() => import('./Page'));

const LazyPage1lpl656 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpl656 />
  </Suspense>
);

export { LazyPage1lpl656 };
