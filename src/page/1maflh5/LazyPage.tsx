import React, { lazy, Suspense } from 'react';

const Page1maflh5 = lazy(() => import('./Page'));

const LazyPage1maflh5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maflh5 />
  </Suspense>
);

export { LazyPage1maflh5 };
